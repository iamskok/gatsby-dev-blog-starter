const crypto = require(`crypto`)
const axios = require(`axios`)
const vault = require(`./vault`)
const rand = () => (Math.random() * 10 ** 17).toString(16)
const host = process.env.GATSBY_HOST_URL
const clientId = process.env.GATSBY_GITHUB_CLIENT_ID
const password = process.env.GATSBY_FUNCTION_PASSWORD
const redirectUri = `${host}/.netlify/functions/access-token`

exports.handler = (event, context, callback) => {
  const hmac = crypto.createHmac(`sha256`, rand())
  const state = hmac.update(rand()).digest(`hex`)
  console.log('[NODE_ENV]', process.env.NODE_ENV)
  axios.post(`${host}/.netlify/functions/vault`, {
    state,
    password
  }).then(res => {
    const githubIdentity = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=repo,user`

    callback(null, {
      statusCode: 200,
      pathParameters: state,
      body: githubIdentity
    })
  }).catch(error => {
    console.error(error)

    callback(null, {
      statusCode: 500,
      body: `Server error`
    });
  })
}
