const User = require("../models/user.model.js");

// Create and Save a new bloglist
exports.create = (req, res) => {
  
};

// Retrieve all bloglist from the database.
exports.findAll = (req, res) => {
  
};

// Find a single bloglist with a bloglistId
exports.findOne = (req, res) => {
  
};

// Update a bloglist identified by the bloglistId in the request
exports.update = (req, res) => {
  
};

// Delete a bloglist with the specified bloglistId in the request
exports.delete = (req, res) => {
  
};

// Delete all bloglist from the database.
exports.deleteAll = (req, res) => {
  
};

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a bloglist
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    status: req.body.status,
   
  });

  // Save bloglist in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    else res.send(data);
  });
};
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user."
      });
    else res.send(data);
  });
};
exports.findOne = (req, res) => {
  User.findById(req.params.userId, (err, data) => {
    if (err) {
      console.log(err);
      if (err.kind === "not_found") { 
        res.status(404).send({
          message: `Not found user with id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving user with id " + req.params.userId
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  User.updateById(
    req.params.userId,
    new User(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.params.userId
          });
        }
      } else res.send(data);
    }
  );
};