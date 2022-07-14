
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

  // Параметры скрипта
  for (let index = 0; index < process.argv.length; index++) {

    if (process.argv[index] == 'migrate') {

      const users_migrate = require('./database/migrations/users.migrations');
      
      users_migrate.DropTable();
      users_migrate.CreateTable();
    }
  }

};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

start();



// let nodePath = process.argv[0];
// let appPath = process.argv[1];
// let name = process.argv[2];
// let age = process.argv[3];
 
// console.log("nodePath: " + nodePath);
// console.log("appPath: " + appPath);
// console.log();
// console.log("name: " + name);
// console.log("age: " + age);
