
// Dependencies
// =============================================================

var express = require("express");
var app = express();

var db = require("./models");


// Sets up the Express App
// =============================================================

var fileUpload = require("express-fileupload");
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
// Static directory to be served
app.use(express.static("app/public"));

// Routes
// =============================================================
// require("./app/routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
require("./app/routes/html-routes.js")(app);

// require("./routes")(app);



const routes = require("./routes");
app.use(routes);



// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
	});
});
