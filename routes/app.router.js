'use strict';

const Home = require ('../controllers/home.controller');

let routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello World!';
    }
  },
  {
    method: 'GET',
    path: '/query',
    handler: (request, h) => {
      return request.query;
    }
  },
  {
    method: 'GET',
    path: '/qwerty',
    handler: (request, h) => {
      return { qwerty: "qwerty" };
    }
  },
  {
    method: 'GET',
    path: '/home',
    options: {
        auth: 'simple'
    },
    handler: Home
  },
  {
    method: 'GET',
    path: '/auth',
    options: {
        auth: 'simple'
    },
    handler: function (request, h) {
      return h.response('Ok').code(200);
    }
  },
  {
    method: '*',
    path: '/{any*}',
    handler: function (request, h) {
      return h.response({ 
        statusCode: 404,
        error: "Not Found",
        message: "Not Found"
      }).code(404);
    }
  }
];

// API
const routes_API = require('./api/api.router');
routes = routes.concat(routes_API);

module.exports = routes;
