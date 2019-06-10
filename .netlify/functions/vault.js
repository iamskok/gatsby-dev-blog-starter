const password = process.env.GATSBY_FUNCTION_PASSWORD

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
