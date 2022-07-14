'use strict';

const dbconn = require('../models/db.model');

const User = function(user) {
  this.login = user.login;
  this.password = user.password;
  this.first_name = user.first_name;
  this.last_name = user.last_name;
};

module.exports.all = () => {

  return new Promise((resolve, reject) => {
    dbconn.query('SELECT id, login, first_name, last_name, deleted FROM users', [], function (err, results) {
      if (err) return reject(new Error(err));
      return resolve(results);
    })
  }).catch((error) => {
    console.error("MySQL", error.stack);
    return null;
  });
}

module.exports.find = (user_id) => {
  return new Promise((resolve, reject) => {
    dbconn.query('SELECT id, login, first_name, last_name, deleted FROM users WHERE id = ? LIMIT 1', [user_id], function (err, results) {
      if (err) return reject(new Error(err));
      return resolve(results);
    })
  }).then((results) => {
    if (results.length !== 1)
      return new Object;
    return results[0];
  }).catch((error) => {
    console.error("MySQL", error.stack);
    return null;
  });
}