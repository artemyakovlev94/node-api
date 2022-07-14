'use strict';

const dbconn = require('../../models/db.model');

const table_name = 'users';
const query_create = 'CREATE TABLE ' + table_name + ' (' +
  'id int UNSIGNED NOT NULL AUTO_INCREMENT,' +
  'login varchar(45) NOT NULL,' +
  'password varchar(255) NOT NULL,' + 
  'first_name varchar(45) NOT NULL,' + 
  'last_name varchar(45) DEFAULT NULL,' +
  'deleted tinyint(1) unsigned NOT NULL DEFAULT \'0\',' +
  'created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,' +
  'updated_at timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,' +
  'PRIMARY KEY (id),' +
  'UNIQUE KEY id_UNIQUE (id),' +
  'UNIQUE KEY login_UNIQUE (login)' +
  ') ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci';

module.exports.CreateTable = function() {

  dbconn.query(query_create, [], function (err, results) {
    if (err) {
      console.error('Migrate Error', err);
      return;
    }
    console.info('The \'' + table_name + '\' table has been created')
  });
}
//
module.exports.DropTable = function() {

  dbconn.query('DROP TABLE IF EXISTS ' + table_name, [], function (err, results) {
    if (err) {
      console.error(err.sqlMessage);
      return;
    }
    console.info('The \'' + table_name + '\' table has been deleted')
  });
}