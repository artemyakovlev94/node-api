'use strict'

// http://vincit.github.io/objection.js/guide/query-examples.html#insert-queries

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

    var users = new Array;

    for (let index = 0; index < 3; index++) {
      
      let user = new Object(this);

      user.login = index;

      users.push(user);
    }

    console.log(users)
  }

}

module.exports = DataBase;