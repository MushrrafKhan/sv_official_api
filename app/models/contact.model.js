const sql = require("./db.js");

// constructor
const Contact = function(contact) {
  this.id = contact.id;
  this.name = contact.name;
  this.email = contact.email;
  this.phone = contact.phone;
  this.message = contact.message;
  ;
};

Contact.create = (newContact, result) => {
  sql.query("INSERT INTO contact SET ?", newContact, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created contact: ", { id: res.insertId, ...newContact });
    result(null, { id: res.insertId, ...newContact });
  });
};

Contact.findById = (contactId, result) => {
  sql.query(`SELECT * FROM contact WHERE id = ${contactId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Contact: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Contact with the id
    result({ kind: "not_found" }, null);
  });
};

Contact.getAll = result => {
  sql.query("SELECT * FROM contact", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Contact: ", res);
    result(null, res);
  });
};

Contact.updateById = (id, Contact, result) => {
  sql.query(
    "UPDATE contact SET name = ?, email = ?, phone = ?, message = ? WHERE id = ?",
    [
      Contact.name,
      Contact.email,
      Contact.phone,
      Contact.message,
    
    
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

      console.log("updated contact: ", { id: id, ...contact });
      result(null, { id: id, ...contact });
    }
  );
};


module.exports = Contact;