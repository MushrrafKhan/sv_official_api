const Cate = require("../models/cate.model.js");

// Create and Save a new Cate
exports.create = (req, res) => {
  
};

// Retrieve all Cate from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Cate with a cateId
exports.findOne = (req, res) => {
  
};

// Update a Cate identified by the cateId in the request
exports.update = (req, res) => {
  
};

// Delete a Cate with the specified cateId in the request
exports.delete = (req, res) => {
  
};

// Delete all Cate from the database.
exports.deleteAll = (req, res) => {
  
};
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Cate
  const cate = new Cate({
    title: req.body.title,
    created_at: new Date(),
    updated_at: new Date(),
  });

  // Save Cate in the database
  Cate.create(cate, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Cate."
      });
    else res.send(data);
  });
};
exports.findAll = (req, res) => {
  Cate.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cate."
      });
    else res.send(data);
  });
};
exports.findOne = (req, res) => {
  Cate.findById(req.params.cateId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Cate with id ${req.params.cateId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Cate with id " + req.params.cateId
        });
      }
    } else res.send(data);
  });
};

exports.categoryBLog = (req, res) => {
  Cate.categoryBLogModel(req.params.categoryId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Cate with id ${req.params.categoryId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Cate with id " + req.params.categoryId
        });
      }
    } else res.send(data);
  })};

  exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Cate.updateById(
      req.params.cateId,
      new Cate(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found User with id ${req.params.cateId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating User with id " + req.params.cateId
            });
          }
        } else res.send(data);
      }
    );
  };

  exports.delete = (req, res) => {
    Cate.remove(req.params.cateId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Cate with id ${req.params.cateId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Cate with id " + req.params.cateId
          });
        }
      } else res.send({ message: `Cate was deleted successfully!` });
    });
  };
  
  exports.deleteAll = (req, res) => {
    Cate.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Cate."
        });
      else res.send({ message: `All Cate were deleted successfully!` });
    });
  };