'use strict';

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