const axios = require('axios')
const authRedirect = (query) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <script>
      if (localStorage !== undefined) {
        localStorage.setItem('github-token', '${query[`access_token`]}')
      } else {
        function setCookie(name, value, options = {}) {

          options = {
            path: '/',
            // add other defaults here if necessary
            ...options
          };

          if (options.expires && options.expires.toUTCString) {
            options.expires = options.expires.toUTCString()
          }

          let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value)

          for (let optionKey in options) {
            updatedCookie += '; ' + optionKey
            let optionValue = options[optionKey]
            if (optionValue !== true) {
              updatedCookie += '=' + optionValue
            }
          }

          document.cookie = updatedCoo
        }
        // Set a cookie for 1 month
        setCookie('github-token', '${query[`access_token`]}', {
          'max-age': 2678400
        });
      }
      location.href = '/blog/github-comments';
    </script>
  </body>
  </html>`

let host = ``
let clientId = ``
let clientSecret = ``
let password = ``

console.log('access-token.js CONTEXT', process.env.CONTEXT)

if (process.env.CONTEXT === 'production' || true) {
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
  console.error('process.env.CONTEXT is invalid. \nPlease select from `production` or `development`\n')
  console.error('process.env.CONTEXT = ', process.env.CONTEXT);
}

// host = 'https://gatsby-dev-blog-starter.netlify.com'
// clientId = '48c2d50f608bd71d4aac'
// password = 'MX#MC&fhati1m0jAEtKCV%QeXcNTX%3khlCsjf^hiuPZVaP2EMCqmdYWC6f^SSnJx3N8llqbR1$UBkh1^YG7MrQb41aR$%CA*JTm'

console.log('vault.js host', host)
console.log('vault.js clientId', clientId)
console.log('vault.js password', password)

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
      // let isValid = true
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
          body: `Server error 1 - ${error.message}`
        })
      })
    }).catch(error => {
    	let err;
    	try {
    		err = JSON.stringify(error)
    	} catch(e) {
    		err = `xxxxxx ${e.message}`
    	}

      console.error(error)

      callback(null, {
        statusCode: 500,
        body: `Server error 2 - ${error.message} ${err}`
      })
  })
}

