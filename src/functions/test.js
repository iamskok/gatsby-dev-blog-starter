const GATSBY_CUSTOM_CONTEXT = process.env.GATSBY_CUSTOM_CONTEXT
const host = process.env.GATSBY_HOST_URL
const clientId = process.env.GATSBY_GITHUB_CLIENT_ID
const clientSecret = process.env.GATSBY_GITHUB_CLIENT_SECRET
const password = process.env.GATSBY_FUNCTION_PASSWORD

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: `TEST:: GATSBY_CUSTOM_CONTEXT: ${GATSBY_CUSTOM_CONTEXT}, host: ${host}, clientId: ${clientId}, clientSecret: ${clientSecret}, password: ${password},`
  })
}