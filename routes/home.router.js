// routes.js
'use strict';
const Path = require('path');
//const dbconn = require('../models/db.model');
const Home = require ('../controllers/home.controller');

module.exports = [
    {
        method: 'GET',
        path: '/home',
        options: {
            auth: 'simple'
        },
        handler: Home
    },

];