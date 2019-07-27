let password = ``

console.log('vault.js CONTEXT', process.env.CONTEXT)

if (process.env.CONTEXT === 'production' || true) {
  password = process.env.GATSBY_FUNCTION_PASSWORD
} else if (process.env.CONTEXT === 'development') {
  password = process.env.GATSBY_DEV_FUNCTION_PASSWORD
} else {
  console.error('process.env.CONTEXT is invalid. \nPlease select from `production` or `development`\n')
  console.error('process.env.CONTEXT = ', process.env.CONTEXT);
}

// host = 'https://gatsby-dev-blog-starter.netlify.com'
// clientId = '48c2d50f608bd71d4aac'
// password = 'MX#MC&fhati1m0jAEtKCV%QeXcNTX%3khlCsjf^hiuPZVaP2EMCqmdYWC6f^SSnJx3N8llqbR1$UBkh1^YG7MrQb41aR$%CA*JTm'

// console.log('vault.js host', host)
// console.log('vault.js clientId', clientId)
// console.log('vault.js password', password)

exports.handler = (event, context, callback) => {
  if (event.httpMethod === 'POST') {
    const body = JSON.parse(event.body)

    if (body.password !== password) {
      return callback(null, {
        statusCode: 403,
        body: 'Access denied 1'
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
        body: 'Access denied 2'
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