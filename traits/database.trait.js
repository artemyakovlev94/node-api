'use strict';

const dbconn = require('../models/db.model');

module.exports.all = async (table, fields) => {
  try {
    return await new Promise((resolve, reject) => {
      dbconn.query('SELECT ' + fields + ' FROM ' + table, [], function (err, results) {
        if (err)
          return reject(new Error(err));
        return resolve(results);
      });
    })
    .then((results) => {
      return Object.values(JSON.parse(JSON.stringify(results)));
    })
    .catch((error) => {
      console.error("MySQL", error.stack);
      return null;
    });
  } catch (error) {
    console.error("MySQL", error.stack);
    return null;
  }
}
