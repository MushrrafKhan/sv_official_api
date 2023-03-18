const sql = require("./db.js");

// constructor
const User = function(user) {
  this.username = user.username;
  this.password = user.password;
  this.email = user.email;
  this.status = user.status;
  ;
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.findById = (userId, result) => {
  sql.query(`SELECT * FROM user WHERE id = ${userId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found User: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found User with the id
    result({ kind: "not_found" }, null);
  });
};

User.getAll = result => {
  sql.query("SELECT * FROM user", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("User: ", res);
    result(null, res);
  });
};

User.updateById = (id, User, result) => {
  sql.query(
    "UPDATE user SET username = ?, auth_key = ?, password = ?, password_reset_token = ?,	verification_token = ?,email = ?, Bio = ?, status = ?, created_at = ?, updated_at = ?, type = ? WHERE id = ?",
    [
      User.username,
      User.auth_key,
      User.password,
      User.password_reset_token,
      User.verification_token,
      User.email,
      User.Bio,
      User.status,
      User.created_at,
      User.updated_at,
      User.type,
      id
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Cate with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated user: ", { id: id, ...User });
      result(null, {  id: id, ...User });
    }
  );
};

User.remove = (id, result) => {
  sql.query("DELETE FROM user WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Cate with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted user  with id: ", id);
    result(null, res);
  });
};

User.removeAll = result => {
  sql.query("DELETE FROM user", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} User`);
    result(null, res);
  });
};

module.exports = User;