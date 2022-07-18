'use strict';

const ResponseTrait = require('../traits/response.trait');
const User = require('../models/user.model');

module.exports.all = async (request, h) => {

  const results = await new User().all();

  if (results == null)
    return ResponseTrait.InternalServerError(h);

  return ResponseTrait.Success(h, results);
}

module.exports.findById = async (request, h) => {
  
  const results = await new User({id: request.params.user_id}).find();

  if (results == null)
    return ResponseTrait.InternalServerError(h);

  return ResponseTrait.Success(h, results);
}

module.exports.create = async (request, h) => {

  let users = await new User().all();

  if (users == null)
    return ResponseTrait.InternalServerError(h);

  return ResponseTrait.Success(h, users);
}