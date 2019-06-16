module.exports = (query) => `
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
</html>
`