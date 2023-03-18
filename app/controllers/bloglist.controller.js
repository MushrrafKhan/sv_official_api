const Bloglist = require("../models/bloglist.model.js");
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'uploads/');
  },

  // By default, multer removes file extensions so let's add them back
  filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
// Create and Save a new bloglist
exports.create = (req, res) => {
  
};

// Retrieve all bloglist from the database.
exports.findAll = (req, res) => {
  
};

// Find a single bloglist with a bloglistId
exports.findOne = (req, res) => {
  
};

// Find a single bloglist with a bloglistId
exports.blogFindOne = (req, res) => {
  
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
exports.uploadImage = (req, res) => {
  let upload = multer({ storage: storage }).single("image");

  upload(req, res, function(err) {
    // console.log(res);

      // req.file contains information of uploaded file
      // req.body contains information of text fields, if there were any

      if (req.fileValidationError) {
          return res.send(req.fileValidationError);
      }
      else if (!req.file) {
          return res.send('Please select an image to upload');
      }
      else if (err instanceof multer.MulterError) {
          return res.send(err);
      }
      else if (err) {
          return res.send(err);
      }

      // // Display uploaded image for user validation
      var response = req.file.filename;
      res.send({response});
  });
};
exports.create = (req, res) => {
  

  // Create a bloglist
  const bloglist = new Bloglist({
    title: req.body.title,
    image: req.body.image,
    date: req.body.date,
    content: req.body.content,
    category_id: req.body.category_id,
    created_at: req.body.created_at,
    updated_at: req.body.updated_at
  });
  
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Bloglist.create(bloglist, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the bloglist."
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Bloglist.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bloglists."
      });
    else res.send(data);
  });
};
exports.findOne = (req, res) => {
  Bloglist.findById(req.params.blogId, (err, data) => {
   
    if (err) {
      console.log(err);
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found bloglist with id ${req.params.blogId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving bloglist with id " + req.params.blogId
        });
      }
      
    } else {
      
      data.image = 'file:///Library/WebServer/Documents/softvolt/node/softvolt_node/uploads/image-1602246531144.jpeg';
      res.send(data);
    }
  });
};
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  
  Bloglist.updateById(
    req.params.blogId,
    new Bloglist(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.blogId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.params.blogId
          });
        }
      } else res.send(data);
    }
  );
};

/* exports.blogFindOne = (req, res) => {
  Bloglist.findById(req.params.blogId, (err, data) => {
    if (err) {
      console.log(err);
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found bloglist with id ${req.params.blogId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving bloglist with id " + req.params.blogId
        });
      }
    } else res.send(data);
  });
}; */