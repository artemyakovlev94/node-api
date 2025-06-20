
module.exports.Success = (h, data, code = 200, message = '') => {
  return h.response({
    message: message,
    data: data
  }).code(code);
}

module.exports.Error = (h, error, code, message = '') => {
  return h.response({
    statusCode: code,
    error: error,
    message: message
  }).code(code);
}

module.exports.InternalServerError = (h) => {
  return h.response({
    statusCode: 500,
    error: 'Internal Server Error',
    message: 'Произошла внутренняя ошибка сервера. Обратитесь в техническую поддержку.'
  }).code(500);
}

module.exports.NotFound = (h, message = 'Not Found') => {
  return h.response({
    statusCode: 404,
    error: 'Not Found',
    message: message
  }).code(500);
}

module.exports.ValidateError = (request, h, err) => {

  if (process.env.NODE_ENV === 'dev') {
    console.error(err.message, err.details);
    throw err;
  }
  else {
    return h.response({
      statusCode: 400,
      error: 'Bad Request',
      message: err.message
    }).code(400).takeover();
  }
}