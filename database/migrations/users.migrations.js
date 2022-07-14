'use strict';

const dbconn = require('../../models/db.model');

const table_name = 'users';
const query_create = 'CREATE TABLE ' + table_name + ' ('
  'id int NOT NULL AUTO_INCREMENT,' +
  'login varchar(45) NOT NULL,' +
  'password varchar(150) NOT NULL,' + 
  'first_name varchar(45) NOT NULL,' + 
  'last_name varchar(45) DEFAULT NULL,' +
  'deleted tinyint unsigned NOT NULL DEFAULT \'0\',' +
  'predefined tinyint unsigned NOT NULL DEFAULT \'0\',' +
  'PRIMARY KEY (\'id\'),' +
  'UNIQUE KEY \'id_UNIQUE\' (\'id\'),' +
  'UNIQUE KEY \'login_UNIQUE\' (\'login\')' +
  ') \'ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci\'';

module.exports.CreateTable = function() {

  dbconn.query(query_create, [], function (err, results) {
    if (err) {
      console.error(err.sqlMessage);
      return;
    }
    console.info('Table \'users\' была создана');
  });
}

module.exports.DropTable = function() {

  dbconn.query('DROP TABLE ' + table_name, [], function (err, results) {
    if (err) {
      console.error(err.sqlMessage);
      return;
    }
    console.info('Table \'' + table_name + '\' была удалена');
  });
}