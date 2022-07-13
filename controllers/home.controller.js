'use strict';

const dbconn = require('../models/db.model');

function getAllNotes() {
  return new Promise((resolve, reject) => {
    dbconn.query('SELECT * FROM note', [], function (err, results) {
      if (err) {
        return reject(error)
      }

      console.log(results);

      return resolve(results);
    })
  })
}

module.exports = async (request, h) => {
  // maybe add some error handling here
  const results = await getAllNotes();
  return {
    data: {
      notes: results
    },
    page: 'Home -- Notes Board',
    description: 'Welcome to my Notes Board'
  };
}