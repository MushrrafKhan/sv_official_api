const sql = require("./db.js");

// constructor
const Bloglist = function(bloglist) {
  var datetime = new Date();
  let ts = Date.now();
let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth();
let year = date_ob.getFullYear();

  this.title = bloglist.title;
  this.image = bloglist.image;
  this.date = bloglist.date;
  this.content = bloglist.content;
  this.created_at = datetime;
  this.updated_at = datetime;
  this.category_id = bloglist.category_id;
};

Bloglist.create = (newBloglist, result) => {
  sql.query("INSERT INTO blog SET ?", newBloglist, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created bloglist: ", { id: res.insertId, ...newBloglist });
    result(null, { id: res.insertId, ...newBloglist });
  });
};

Bloglist.findById = (blogId, result) => {
  sql.query(`SELECT * FROM blog WHERE id = ${blogId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found cate: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Cate with the id
    result({ kind: "not_found" }, null);
  });
};
/* 
Bloglist.blogById = (categoryId, result) => {
  sql.query(`SELECT * FROM blog WHERE category_id = ${categoryId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Bloglist: ", res);
      result(null, res);
      return;
    }

    // not found Bloglist with the id
    result({ kind: "not_found" }, null);
  });
}; */

Bloglist.getAll = result => {
  sql.query("SELECT * FROM blog", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Bloglist: ", res);
    result(null, res);
  });
};

Bloglist.updateById = (id, bloglist, result) => {
  sql.query(
    "UPDATE blog SET title = ?, image = ?, date = ?, content = ?,	created_at = ?,updated_at = ?, category_id = ? WHERE id = ?",
    [
      bloglist.title,
      bloglist.image,
      bloglist.date,
      bloglist.content,
      bloglist.created_at,
      bloglist.updated_at,
      bloglist.category_id,
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

      console.log("updated blog: ", { id: id, ...bloglist });
      result(null, { id: id, ...bloglist });
    }
  );
};

Bloglist.remove = (id, result) => {
  sql.query("DELETE FROM blog WHERE id = ?", id, (err, res) => {
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

    console.log("deleted Blog  with id: ", id);
    result(null, res);
  });
};

Bloglist.removeAll = result => {
  sql.query("DELETE FROM blog", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Bloglist`);
    result(null, res);
  });
};

module.exports = Bloglist;