'use strict';

const Joi = require("@hapi/joi")
const User = require('../../controllers/user.controller');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    options: {
      auth: 'simple'
    },
    handler: User.all
  },
  {
    method: 'GET',
    path: '/users/{user_id}',
    options: {
      auth: 'simple',
      validate: {
        params: Joi.object({
          user_id: Joi.number().integer().min(1)
            // .error(() => Error('The \'user_id\' parameter must be a numeric value greater than 0.'))
        })
      }
    },
    handler: User.findById
  },
];