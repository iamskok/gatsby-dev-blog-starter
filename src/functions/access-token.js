import axios from 'axios'
import authRedirect from '../auth-redirect'

let host = ``
let clientId = ``
let clientSecret = ``
let password = ``

if (process.env.CONTEXT === 'production') {
  host = process.env.GATSBY_HOST_URL
  clientId = process.env.GATSBY_GITHUB_CLIENT_ID
  clientSecret = process.env.GATSBY_GITHUB_CLIENT_SECRET
  password = process.env.GATSBY_FUNCTION_PASSWORD
} else if (process.env.CONTEXT === 'development') {
  host = process.env.GATSBY_DEV_HOST_URL
  clientId = process.env.GATSBY_DEV_GITHUB_CLIENT_ID
  clientSecret = process.env.GATSBY_DEV_GITHUB_CLIENT_SECRET
  password = process.env.GATSBY_DEV_FUNCTION_PASSWORD
} else {
  console.error('access-token.js: process.env.CONTEXT is invalid. \nPlease select from `production` or `development`', process.env.CONTEXT)
}

exports.handler = (event, context, callback) => {
  axios.get(`${host}/functions/vault?password=${password}`)
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

