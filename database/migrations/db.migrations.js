'use strict';

const users_migrations = require('./users.migrations');
      
module.exports.migrate = function() {

  users_migrations.CreateTable();
}

module.exports.fresh = function() {

  users_migrations.DropTable();
  users_migrations.CreateTable();
}