'use strict';

const User = require('../controllers/user.controller');

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
            auth: 'simple'
        },
        handler: User.find
    },
];