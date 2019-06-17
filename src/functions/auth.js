const crypto = require(`crypto`)
const axios = require(`axios`)
const rand = () => (Math.random() * 10 ** 17).toString(16)

let host = ``
let clientId = ``
let password = ``

if (process.env.CONTEXT === 'production') {
  host = process.env.GATSBY_HOST_URL
  clientId = process.env.GATSBY_GITHUB_CLIENT_ID
  password = process.env.GATSBY_FUNCTION_PASSWORD
} else if (process.env.CONTEXT === 'development') {
  host = process.env.GATSBY_DEV_HOST_URL
  clientId = process.env.GATSBY_DEV_GITHUB_CLIENT_ID
  password = process.env.GATSBY_DEV_FUNCTION_PASSWORD
} else {
  console.error('auth.js: process.env.CONTEXT is invalid. \nPlease select from `production` or `development`', process.env.CONTEXT)
}

exports.handler = (event, context, callback) => {
  const hmac = crypto.createHmac(`sha256`, rand())
  const state = hmac.update(rand()).digest(`hex`)

  let OAuthURL = `https://github.com/login/oauth/authorize`

  OAuthURL += `?client_id=${clientId}`
  OAuthURL += `&redirect_uri=${host}/functions/access-token`
  OAuthURL += `&state=${state}`
  OAuthURL += `&scope=repo,user`

  axios.post(`${host}/functions/vault`, {
    state,
    password
  }).then(res => {
    callback(null, {
      statusCode: 200,
      pathParameters: state,
      body: OAuthURL
    })
  }).catch(error => {
    console.error(error)

    callback(null, {
      statusCode: 500,
      body: `Server error`
    });
  })
}
