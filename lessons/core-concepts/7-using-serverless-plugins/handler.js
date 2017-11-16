
module.exports.hello = (event, context, callback) => {
  /* Step 1. In this_file, Create a `200` response code and return the `event` in the response body */
  // docs link http://bit.ly/2mkgV4P
  const response = {
    statusCode: 200,
      body: JSON.stringify({
        message: 'Hi xpj',
        event: event
      })
  }
  return callback(null, response);
}
