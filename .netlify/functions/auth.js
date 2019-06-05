const crypto = require(`crypto`)
const vault = require(`./vault`)
const rand = () => (Math.random() * 10 ** 17).toString(16)
// const host = process.env.NODE_ENV === `production` ? process.env.GATSBY_HOSTNAME : `http://localhost:8888`
const host = 'https://gatsby-dev-blog-starter.netlify.com'
const gh = {
  clientId: process.env.GATSBY_GITHUB_CLIENT_ID,
  redirectUri: `${host}/.netlify/functions/access-token`
}

exports.handler = (event, context, callback) => {
  const hmac = crypto.createHmac(`sha256`, rand());
  const state = hmac.update(rand()).digest(`hex`);

  vault.add(`states`, {
    value: state,
    created: Date.now()
  })

  const ghIdentity = `https://github.com/login/oauth/authorize?client_id=${gh.clientId}&redirect_uri=${gh.redirectUri}&state=${state}&scope=repo,user`;

  callback(null, {
    statusCode: 200,
    body: ghIdentity
  })
};
