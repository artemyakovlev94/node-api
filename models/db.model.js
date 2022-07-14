var db = require('mysql');

var dbconn = db.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

dbconn.connect(function(err) {
  if (err) {
    console.error('MySQL', err.stack);
    return;
  }
});

module.exports = dbconn;