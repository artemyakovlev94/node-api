'use strict';

// const dbconn = require('../models/db.model');

//const DB = require('../traits/database.trait');

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

// async function getUsers() {

//   try {
//     return await new Promise((resolve, reject) => {
//       dbconn.query('SELECT id, login, first_name, last_name, deleted, created_at, updated_at FROM users', [], function (err, results) {
//         if (err)
//           return reject(new Error(err));

//         results = Object.values(JSON.parse(JSON.stringify(results)));

//         var users = new Array;

//         results.forEach(element => {
//           users.push(new User(element));
//         });

//         return resolve(users);
//       });
//     });
//   } catch (error) {
//     console.error("MySQL", error.stack);
//     return null;
//   }
// }

const DataBase = require('./database.model')

class User extends DataBase {

  id;
  login;
  #password;
  first_name;
  last_name;
  #deleted;

  constructor(data = undefined) {

    super();

    if (typeof data == 'object') {

      if (typeof data.id != 'undefined') {
        this.id = data.id || null;
      }

      if (typeof data.login != 'undefined') {
        this.login = data.login || null;
      }

      if (typeof data.password != 'undefined') {
        this.password = data.password || null;
      }

      if (typeof data.first_name != 'undefined') {
        this.first_name = data.first_name || null;
      }

      if (typeof data.last_name != 'undefined') {
        this.last_name = data.last_name || null;
      }

      if (typeof data.deleted != 'undefined') {
        this.deleted = (typeof data.deleted == 'number') ? Boolean(data.deleted) : false;
      }

      if (typeof data.created_at != 'undefined') {
        this.created_at = data.created_at || null;
      }

      if (typeof data.updated_at != 'undefined') {
        this.updated_at = data.updated_at || null;
      }
    }
  }

  // all = async () => {

    
  //   // let users = new Array;

  //   // let results = await DB.all('users', 'id, login, first_name, last_name, deleted, created_at, updated_at');

  //   // if (results == null) {
  //   //   return null;
  //   // }

  //   // results.forEach(element => {
  //   //   users.push(new User(element));
  //   // });

  //   // return users;
  // }

  /**
   * Получить всех пользователей
   * 
   * @returns Array | null
   */
  // all = async () => {
  //   try {
  //     return await new Promise((resolve, reject) => {
  //       dbconn.query('SELECT id, login, first_name, last_name, deleted, created_at, updated_at FROM users', [], function (err, results) {
  //         if (err)
  //           return reject(new Error(err));
  //         return resolve(results);
  //       });
  //     })
  //     .then((results) => {
  //       var users = new Array;

  //       results = Object.values(JSON.parse(JSON.stringify(results)));
        
  //       results.forEach(element => {
  //         users.push(new User(element));
  //       });

  //       return users;
  //     })
  //     .catch((error) => {
  //       console.error("MySQL", error.stack);
  //       return null;
  //     });
  //   } catch (error) {
  //     console.error("MySQL", error.stack);
  //     return null;
  //   }
  // }

  // find = async () => {
  //   try {
  //     return await new Promise((resolve, reject) => {
  //       dbconn.query('SELECT id, login, first_name, last_name, deleted, created_at, updated_at FROM users WHERE id = ? LIMIT 1', [this.id], function (err, results) {
  //         if (err) return reject(new Error(err));
  //         return resolve(results);
  //       })
  //     }).then((results) => {
  //       results = Object.values(JSON.parse(JSON.stringify(results)));
  //       var users = new Array;
  //       results.forEach(element => {
  //         users.push(new User(element));
  //       });
  //       return users[0];


  //       // if (results.length !== 1)
  //       //   return new Object;
  //       // return results[0];
  //     }).catch((error) => {
  //       console.error("MySQL", error.stack);
  //       return null;
  //     });
  //   } catch (error) {
  //     console.error("MySQL", error.stack);
  //     return null;
  //   }
  // }
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