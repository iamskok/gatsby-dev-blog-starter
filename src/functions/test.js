const context = process.env.CONTEXT;
const host = process.env.GATSBY_HOST_URL
const clientId = process.env.GATSBY_GITHUB_CLIENT_ID
const clientSecret = process.env.GATSBY_GITHUB_CLIENT_SECRET
const password = process.env.GATSBY_FUNCTION_PASSWORD

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: `TEST:: context: ${JSON.stringify(context)}, host: ${host}, clientId: ${clientId}, clientSecret: ${clientSecret}, password: ${password},`
  })
}