/* Step 3. In this_file, access your newly created enviroment variable off of `process.env` and return it in the `foo` function response */
module.exports.foo = (event, context, callback) => {

  console.log(process.env.MY_ENV_VAR)

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      headers: {
        /* Required for CORS support to work */
        "Access-Control-Allow-Origin" : "*",
        /* Required for cookies, authorization headers with HTTPS */
        "Access-Control-Allow-Credentials" : true
      },
      message: `return env variable here ${process.env.MY_ENV_VAR}`
    }),
  }
  return callback(null, response)
}

/* Step 4. In this_file, access your newly created `bar` enviroment variable off of `process.env` and return it in the `bar` function response  */
module.exports.bar = (event, context, callback) => {
  console.log('MY_ENV_VAR ', process.env.MY_ENV_VAR)
  console.log('MY_ENV_VAR_FOR_BAR', process.env.MY_ENV_VAR_FOR_BAR)
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      headers: {
        /* Required for CORS support to work */
        "Access-Control-Allow-Origin" : "*",
        /* Required for cookies, authorization headers with HTTPS */
        "Access-Control-Allow-Credentials" : true
      },
      message: 'return env variable here'
    }),
  }
  return callback(null, response)
}
