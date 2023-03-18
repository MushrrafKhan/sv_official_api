module.exports = app => {
    const contact = require("../controllers/contact.controller.js");
  
    // Create a new cates
    app.post("/contact", contact.create);
  
    // Retrieve all cates
    app.get("/contact", contact.findAll);
  
    // Retrieve a single cates with catesId
    app.get("/contact/:contactId", contact.findOne);
  
    // Update a cates with catesId
    app.put("/contact/:contact", contact.update);

    // Delete a cates with cates
    app.delete("/contact/:contactId", contact.delete);
  
    // Create a new cates
    app.delete("/contact", contact.deleteAll);

  };