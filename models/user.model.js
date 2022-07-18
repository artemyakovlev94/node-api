'use strict';

const dbconn = require('../models/db.model');

// const User = function(user) {
//   this.login = user.login;
//   this.password = user.password;
//   this.first_name = user.first_name;
//   this.last_name = user.last_name;
// };


// all2 = async () => {
//   try {
//     return await new Promise((resolve, reject) => {
//       dbconn.query('SELECT id, login, first_name, last_name, deleted, created_at, updated_at FROM users', [], function (err, results) {
//         if (err)
//           return reject(new Error(err));
//         return resolve(results);
//       });
//     });
//   } catch (error) {
//     console.error("MySQL", error.stack);
//     return null;
//   }
// }

async function getUsers() {

  try {
    return await new Promise((resolve, reject) => {
      dbconn.query('SELECT id, login, first_name, last_name, deleted, created_at, updated_at FROM users', [], function (err, results) {
        if (err)
          return reject(new Error(err));

        results = Object.values(JSON.parse(JSON.stringify(results)));

        var users = new Array;

        results.forEach(element => {
          users.push(new User(element));
        });

        return resolve(users);
      });
    });
  } catch (error) {
    console.error("MySQL", error.stack);
    return null;
  }
}

class User {

  id;
  login;
  #password;
  first_name;
  last_name;
  #deleted;

  constructor(options = undefined) {
    if (typeof options == 'object') {

      if (typeof options.id != 'undefined') {
        this.id = options.id || null;
      }

      if (typeof options.login != 'undefined') {
        this.login = options.login || null;
      }

      if (typeof options.password != 'undefined') {
        this.password = options.password || null;
      }

      if (typeof options.first_name != 'undefined') {
        this.first_name = options.first_name || null;
      }

      if (typeof options.last_name != 'undefined') {
        this.last_name = options.last_name || null;
      }

      if (typeof options.deleted != 'undefined') {
        this.deleted = (typeof options.deleted == 'number') ? Boolean(options.deleted) : false;
      }

      if (typeof options.created_at != 'undefined') {
        this.created_at = options.created_at || null;
      }

      if (typeof options.updated_at != 'undefined') {
        this.updated_at = options.updated_at || null;
      }
    }
  }

  all = async () => {
    try {
      return await new Promise((resolve, reject) => {
        dbconn.query('SELECT id, login, first_name, last_name, deleted, created_at, updated_at FROM users', [], function (err, results) {
          if (err)
            return reject(new Error(err));
          return resolve(results);
        });
      })
      .then((results) => {
        results = Object.values(JSON.parse(JSON.stringify(results)));
        var users = new Array;
        results.forEach(element => {
          users.push(new User(element));
        });
        return users;
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

  find = async (id) => {
    try {
      return await new Promise((resolve, reject) => {
        dbconn.query('SELECT id, login, first_name, last_name, deleted, created_at, updated_at FROM users WHERE id = ? LIMIT 1', [id], function (err, results) {
          if (err) return reject(new Error(err));
          return resolve(results);
        })
      }).then((results) => {
        results = Object.values(JSON.parse(JSON.stringify(results)));
        var users = new Array;
        results.forEach(element => {
          users.push(new User(element));
        });
        return users[0];


        // if (results.length !== 1)
        //   return new Object;
        // return results[0];
      }).catch((error) => {
        console.error("MySQL", error.stack);
        return null;
      });
    } catch (error) {
      console.error("MySQL", error.stack);
      return null;
    }
  }
}

module.exports = User;

// module.exports.all = async () => {

//   try {
//     return await new Promise((resolve, reject) => {
//       dbconn.query('SELECT id, login, first_name, last_name, deleted, created_at, updated_at FROM users', [], function (err, results) {
//         if (err)
//           return reject(new Error(err));
//         return resolve(results);
//       });
//     });
//   } catch (error) {
//     console.error("MySQL", error.stack);
//     return null;
//   }
// }

// module.exports.findById = async (id) => {

//   try {
//     return await new Promise((resolve, reject) => {
//       dbconn.query('SELECT id, login, first_name, last_name, deleted, created_at, updated_at FROM users WHERE id = ? LIMIT 1', [id], function (err, results) {
//         if (err) return reject(new Error(err));
//         return resolve(results);
//       })
//     }).then((results) => {
//       if (results.length !== 1)
//         return new Object;
//       return results[0];
//     }).catch((error) => {
//       console.error("MySQL", error.stack);
//       return null;
//     });
//   } catch (error) {
//     console.error("MySQL", error.stack);
//     return null;
//   }
// }

// //INSERT INTO `node_api`.`users` (`login`, `password`, `first_name`, `last_name`) VALUES ('admin', '12345678', 'Artem', 'Яковлев');

// module.exports.create = async (user) => {

// }