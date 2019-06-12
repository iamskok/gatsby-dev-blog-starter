let password = ``

if (process.env.NODE_ENV === 'production') {
  password = process.env.GATSBY_FUNCTION_PASSWORD
} else if (process.env.NODE_ENV === 'development') {
  password = process.env.GATSBY_DEV_FUNCTION_PASSWORD
} else {
  console.error('vault.js: process.env.NODE_ENV is not valid. \nPlease select from `production` or `development`', process.env.NODE_ENV)
}

exports.handler = (event, context, callback) => {
	if (event.httpMethod === 'POST') {
		const body = JSON.parse(event.body)

		if (body.password !== password) {
			return callback(null, {
				statusCode: 403,
				body: 'Access denied'
			})
		}

		global.state = body.state

		callback(null, {
			statusCode: 200,
			body: global.state || ''
		})
	} else if (event.httpMethod === 'GET') {
		if (event.queryStringParameters.password !== password) {
			return callback(null, {
				statusCode: 403,
				body: 'Access denied'
			})
		}

		callback(null, {
			statusCode: 200,
			body: global.state || ''
		})
	} else {
		callback(null, {
			statusCode: 405,
      body: `Method is not allowed`
		})
	}
}
