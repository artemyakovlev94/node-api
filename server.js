
'use strict';

require('dotenv').config()

const Hapi      = require('@hapi/hapi');
const validate  = require('./controllers/auth.controller');
const apiRouter = require('./routes/api.router');

const start = async () => {

  const server = Hapi.server({ 
    port: process.env.SERVER_PORT,
    host: process.env.SERVER_HOST
  });

  await server.register(require('@hapi/basic'));

  server.auth.strategy('simple', 'basic', { validate });

  server.route(apiRouter);

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello World!';
    }
  });

  server.route({
    method: 'GET',
    path: '/query',
    handler: (request, h) => {
      return request.query;
    }
  });

  server.route({
    method: 'GET',
    path: '/qwerty',
    handler: (request, h) => {
      return { qwerty: "qwerty" };
    }
  });

  server.route({
      method: 'GET',
      path: '/auth',
      options: {
          auth: 'simple'
      },
      handler: function (request, h) {
        return h.response('Ok').code(200);
      }
  });

  server.route({
    method: '*',
    path: '/{any*}',
    handler: function (request, h) {
      return h.response({ 
        statusCode: 404,
        error: "Page Not Found",
        message: "Page Not Found"
      }).code(404);
    }
  });

  await server.start();

  console.log('server running at: ' + server.info.uri);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

start();


// 'use strict';

// const Hapi = require('@hapi/hapi');
// const MySQL = require('mysql');

// const init = async () => {

//   const connection = MySQL.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'node_api'
//   });

//   const server = Hapi.server({
//     port: 3000,
//     host: 'localhost'
//   });

//   connection.connect();

//   server.route({
//     method: 'GET',
//     path: '/',
//     handler: (request, h) => {
//       return 'Hello World!';
//     }
//   });

//   server.route({
//     method: 'GET',
//     path: '/query',
//     handler: (request, h) => {
//       return request.query;
//     }
//   });

//   server.route({
//     method: 'GET',
//     path: '/qwerty',
//     handler: (request, h) => {
//       return { test: "test" };
//     }
//   });

//   server.route({
//     method: 'GET',
//     path: '/users',
//     handler: async (request, h) => {

//       const result = await connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//         if (error) return { err: error };
//         // console.log('The solution is: ', results[0].solution);
//         return { res: results[0].solution };
//       });

//       return result;

//       // try {
//       //   const result = connection.query('SELECT * FROM messages');
//       //   return { res: result };
//       // } catch (error) {
//       //   return { err: error };
//       // }
      

//       // const result = await connection.query('SELECT * FROM messages');
      
      
//     }
//   });

//   server.route({
//     method: '*',
//     path: '/{any*}',
//     handler: function (request, h) {
//       return '404 Error! Page Not Found!';
//     }
//   });

//   await server.start();
//   console.log('Server running on %s', server.info.uri);
// };

// process.on('unhandledRejection', (err) => {

//   console.log(err);
//   process.exit(1);
// });

// init();
