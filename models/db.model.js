var db = require('mysql');

var dbconn = db.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

function getTables() {

  let res = dbconn.query('SHOW TABLES FROM ' + process.env.DB_NAME, [], function (err, results) {
    if (err) return reject(new Error(err));
    return resolve(results);
  })

  return res;

  let promise = new Promise((resolve, reject) => {
    dbconn.query('SHOW TABLES FROM ' + process.env.DB_NAME, [], function (err, results) {
      if (err) return reject(new Error(err));
      return resolve(results);
    })
  }).catch((error) => {
    console.error("MySQL", error.stack);
    return null;
  });

  return promise;
}

dbconn.connect(function(err) {
  if (err) {
    console.error('MySQL', err.stack);
    return;
  }

  // let tables = getTables();

  // if (tables == null) return;
  // console.log(tables)

  // // tables.forEach(table => {
  // //   console.log(table);
  // // });

});

module.exports = dbconn;