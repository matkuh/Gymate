var express = require("express");
var fileUpload = require("express-fileupload");

var app = express();

var PORT = process.env.PORT || 8080; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());

app.use(express.static("app/public"));

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});