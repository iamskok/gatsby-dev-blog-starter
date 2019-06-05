const url = require(`url`)
const axios = require(`axios`)
const vault = require(`./vault`)
const authRedirect = require(`./auth-redirect`)
const host = `https://gatsby-dev-blog-starter.netlify.com`;
const gh = {
  clientId: process.env.GATSBY_GITHUB_CLIENT_ID,
  clientSecret: process.env.GATSBY_GITHUB_CLIENT_SECRET
}

exports.handler = (event, context, callback) => {
  const states = vault.get(`states`);
  let isValid = false;
  for (let state of states) {
    if (Date.now() - state.created > 30000) {
      continue;
    }

    if (state.value === event.queryStringParameters.state) {
      isValid = true;
      break;
    }
  }

  if (!isValid) {
    return callback(null, {
      statusCode: 403,
      // body: `Forbidden`
      body: `states: ${JSON.stringify(states)}\nevent.queryStringParameters.state: ${event.queryStringParameters.state}\n`
    });
  }

  axios.post(`https://github.com/login/oauth/access_token`, {
    state: event.queryStringParameters.state,
    client_id: gh.clientId,
    client_secret: gh.clientSecret,
    code: event.queryStringParameters.code
  }).then(res => {
    const query = res.data.split(`&`).map(item => {
      const pair = item.split(`=`);
      return {
        [pair[0]]: pair[1]
      }
    }).reduce((acc, item) => ({...acc, ...item}), {})

    callback(null, {
      statusCode: 200,
      body: authRedirect(query)
    });
  }).catch(err => {
    console.error(`access-token.js:`, err);
    callback(null, {
      statusCode: 500,
      body: `Server error`
    });
  });
};

