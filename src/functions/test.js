const GATSBY_CUSTOM_CONTEXT = process.env.GATSBY_CUSTOM_CONTEXT
const context1 = process.env.GATSBY_CUSTOM_CONTEXT1
const context2 = process.env.GATSBY_XXX
const host = process.env.GATSBY_HOST_URL
const clientId = process.env.GATSBY_GITHUB_CLIENT_ID
const clientSecret = process.env.GATSBY_GITHUB_CLIENT_SECRET
const password = process.env.GATSBY_FUNCTION_PASSWORD

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: `TEST:: context: ${JSON.stringify(GATSBY_CUSTOM_CONTEXT)}, context1: ${JSON.stringify(context1)}, context2: ${JSON.stringify(context2)}, host: ${host}, clientId: ${clientId}, clientSecret: ${clientSecret}, password: ${password},`
  })
}