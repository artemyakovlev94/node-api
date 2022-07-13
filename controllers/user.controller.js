'use strict';

const ResponseTrait = require('../traits/response.trait');
const User = require('../models/user.model');

module.exports.all = async (request, h) => {
  
  const results = await User.all();

  return ResponseTrait.success(h, results);
}

module.exports.find = async (request, h) => {
  
  const results = await User.find(request.params.user_id);

  if (results == null) {
    return ResponseTrait.error(h, 'Not Found', 404, 'Пользователь не найден');
  }
  return ResponseTrait.success(h, results);
}