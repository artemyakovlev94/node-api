
module.exports.success = (h, data, code = 200, message = '') => {
  return h.response({
    message: message,
    data: data
  }).code(code);
}

module.exports.error = (h, error, code, message = '') => {
  return h.response({
    statusCode: code,
    error: error,
    message: message
  }).code(code);
}