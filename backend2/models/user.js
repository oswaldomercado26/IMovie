// Primero traemos nuestra base de datos
const sql = require("./db.js");

// constructor, nos conectamos al tabla de Products desde nuestra base de datos.
const user = function(users) {
  this.name = useros.name;
};

//Traemos todos los datos desde la tabla users
user.getAll = result => {
  sql.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("useros: ", res);
    result(null, res);
  });
};

//Buscamos datos por ID
user.findById = (userId, result) => {
  sql.query(`SELECT * FROM users WHERE id = ${userId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found useros: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found user with the id
    result({ kind: "not_found" }, null);
  });
};

module.exports = user;