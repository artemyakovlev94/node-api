'use strict'

var db = require('mysql');

var dbconn = db.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

class DataBase {
  
  #table_name;

  constructor() {

    dbconn.connect(function(err) {
      if (err) {
        console.error('MySQL', err.stack);
        return;
      }
    });

    this.#table_name = Object.getPrototypeOf(this).constructor.name.replace(/[a-z](?=[A-Z])/g, "$&_").toLowerCase() + 's';
  }

  all() {
    console.log(this.#table_name);
  }

}

module.exports = DataBase;