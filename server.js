
'use strict';

require('dotenv').config();

const Hapi      = require('@hapi/hapi');
const ResponseTrait = require('./traits/response.trait');
const validate  = require('./controllers/auth.controller');
const router = require('./routes/app.router');

const start = async () => {

  const server = Hapi.server({ 
    port: process.env.SERVER_PORT,
    host: process.env.SERVER_HOST,
    routes: {
      validate: {
        failAction: ResponseTrait.ValidateError
      }
    }
  });

  await server.register(require('@hapi/basic'));

  server.auth.strategy('simple', 'basic', { validate });

  server.route(router);

  await server.start();

  console.log('server running at: ' + server.info.uri);

  // Параметры скрипта
  for (let index = 0; index < process.argv.length; index++) {

    if (process.argv[index] == '--migrate') {
      require('./database/migrations/db.migrations').migrate();
    }

    if (process.argv[index] == '--migrate_fresh') {
      require('./database/migrations/db.migrations').fresh();
    }
  }

};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

start();
