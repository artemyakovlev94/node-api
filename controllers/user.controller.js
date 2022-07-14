'use strict';

const ResponseTrait = require('../traits/response.trait');
const User = require('../models/user.model');

module.exports.all = async (request, h) => {

  const results = await User.all();

  if (results == null)
    return ResponseTrait.InternalServerError(h);

  return ResponseTrait.Success(h, results);
}

module.exports.findById = async (request, h) => {
  
  const results = await User.findById(request.params.user_id);

  if (results == null)
    return ResponseTrait.InternalServerError(h);

  return ResponseTrait.Success(h, results);
}

module.exports.create = async (request, h) => {

  
}