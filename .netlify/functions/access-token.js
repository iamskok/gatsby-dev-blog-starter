const axios = require(`axios`)
const authRedirect = require(`./auth-redirect`)
const host = process.env.GATSBY_HOST_URL
const clientId = process.env.GATSBY_GITHUB_CLIENT_ID
const clientSecret = process.env.GATSBY_GITHUB_CLIENT_SECRET
const password = process.env.GATSBY_FUNCTION_PASSWORD

exports.handler = (event, context, callback) => {
  axios.get(`${host}/.netlify/functions/vault?password=${password}`)
    .then(res => {
      const state = res.data
      let isValid = false
      if (state === event.queryStringParameters.state) {
        isValid = true
      }
      if (!isValid) {
        return callback(null, {
          statusCode: 403,
          body: `Forbidden`
        })
      }
      axios.post(`https://github.com/login/oauth/access_token`, {
        state: event.queryStringParameters.state,
        client_id: clientId,
        client_secret: clientSecret,
        code: event.queryStringParameters.code
      }).then(res => {
        const query = res.data.split(`&`).map(item => {
          const pair = item.split(`=`)
          return {
            [pair[0]]: pair[1]
          }
        }).reduce((acc, item) => ({...acc, ...item}), {})

        callback(null, {
          statusCode: 200,
          body: authRedirect(query)
        })
      }).catch(error => {
        console.error(error)
        callback(null, {
          statusCode: 500,
          body: `Server error`
        })
      })
    }).catch(error => {
      console.error(error)

      callback(null, {
        statusCode: 500,
        body: 'Server error'
      })
  })
}

