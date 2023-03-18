const sql = require("./db.js");

// constructor
const Cate = function(cate) {
  this.title = cate.title;
  this.created_at = cate.created_at;
  this.updated_at = cate.updated_at;
};

Cate.create = (newCate, result) => {
  sql.query("INSERT INTO category SET ?", newCate, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created cate: ", { id: res.insertId, ...newCate });
    result(null, { id: res.insertId, ...newCate });
  });
};

Cate.findById = (cateId, result) => {
  sql.query(`SELECT * FROM category WHERE id = ${cateId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      // console.log("found cate: ", res);
      result(null, res[0]);
      return;
    }

    // not found Cate with the id
    result({ kind: "not_found" }, null);
  });
};

Cate.categoryBLogModel = (categoryId, result) => {
  sql.query(`SELECT * FROM blog WHERE category_id = ${categoryId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found cate: ", res);
      result(null, res);
      return;
    }

    // not found Cate with the id
    result({ kind: "not_found" }, null);
  });
};

Cate.getAll = result => {
  sql.query("SELECT * FROM category", (err, res) => {
    if (err) {
      // console.log("error: ", err);
      result(null, err);
      return;
    }

    // console.log("cate: ", res);
    result(null, res);
  });
};

Cate.updateById = (id, cate, result) => {
  sql.query(
    "UPDATE category SET title = ? WHERE id = ?",
    [
      cate.title, id
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

      console.log("updated cate: ", { id: id, ...cate });
      result(null, { id: id, ...cate });
    }
  );
};

Cate.remove = (id, result) => {
  sql.query("DELETE FROM category WHERE id = ?", id, (err, res) => {
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

    console.log("deleted Cate with id: ", id);
    result(null, res);
  });
};

Cate.removeAll = result => {
  sql.query("DELETE FROM category", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} cate`);
    result(null, res);
  });
};

module.exports = Cate;