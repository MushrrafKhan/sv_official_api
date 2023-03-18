const Contact = require("../models/contact.model.js");

// Create and Save a new Contact
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
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
   
  });

  // Save bloglist in the database
  Contact.create(contact, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the contact."
      });
    else res.send(data);
  });
};
exports.findAll = (req, res) => {
  Contact.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving contact."
      });
    else res.send(data);
  });
};
exports.findOne = (req, res) => {
  Contact.findById(req.params.contactId, (err, data) => {
    if (err) {
      console.log(err);
      if (err.kind === "not_found") { 
        res.status(404).send({
          message: `Not found contact with id ${req.params.contactId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving contact with id " + req.params.contactId
        });
      }
    } else res.send(data);
  });
};