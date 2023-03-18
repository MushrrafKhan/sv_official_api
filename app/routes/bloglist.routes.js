

module.exports = app => {
    const bloglist = require("../controllers/bloglist.controller.js");
  
    // Create a new cates
    app.post("/bloglist", bloglist.create);
    app.post("/bloglist/image", bloglist.uploadImage);
  
    // Retrieve all cates
    app.get("/bloglist", bloglist.findAll);
  
    // Retrieve a single cates with catesId
    app.get("/bloglist/:blogId", bloglist.findOne);

 /*    app.get("/bloglist/bloglist/:blogId", bloglist.blogFindOne); */
  
    // Update a cates with catesId
    app.put("/bloglist/:blogId", bloglist.update);
  
    // Delete a cates with cates
    app.delete("/bloglist/:Id", bloglist.delete);
  
    // Create a new cates
    app.delete("/bloglist", bloglist.deleteAll);
  };