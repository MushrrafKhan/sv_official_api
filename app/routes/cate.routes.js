module.exports = app => {
    const cates = require("../controllers/cate.controller.js");
  
    // Create a new cates
    app.post("/cates", cates.create);
  
    // Retrieve all cates
    app.get("/cates", cates.findAll);
  
    // Retrieve a single cates with catesId
    app.get("/cates/:cateId", cates.findOne);
    app.get("/categoryBLog/:categoryId", cates.categoryBLog);
  
    // Update a cates with catesId
    app.put("/cates/:cateId", cates.update);
  
    // Delete a cates with cates
    app.delete("/cates/:cateId", cates.delete);
  
    // Create a new cates
    app.delete("/cates", cates.deleteAll);
  };