module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    // Create a new cates
    app.post("/user", user.create);
  
    // Retrieve all cates
    app.get("/user", user.findAll);
  
    // Retrieve a single cates with catesId
    app.get("/user/:userId", user.findOne);
  
    // Update a cates with catesId
    app.put("/user/:userId", user.update);
  
    // Delete a cates with cates
    app.delete("/user/:Id", user.delete);
  
    // Create a new cates
    app.delete("/user", user.deleteAll);
  };