const express = require("express");
// var multer = require('multer');
const bodyParser = require("body-parser");
const app = express();
var cors = require('cors')
var allowedOrigins = ['http://localhost:3000',
                      'http://localhost:4200'];
app.use(cors({  
  origin: function(origin, callback){
    // allow requests with no origin     
    // (like mobile apps or curl requests)    
    if(!origin) 
      return callback(null, true);    
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +                
          'allow access from the specified Origin.';      
      return callback(new Error(msg), false);    
    }    
    return callback(null, true);  
  }
}));

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
// require("./app/routes/customer.routes.js")(app);
require("./app/routes/cate.routes.js")(app);
require("./app/routes/bloglist.routes.js")(app);
require("./app/routes/user.routes.js")(app);
require("./app/routes/contact.routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});