var express = require("express");
var fileUpload = require("express-fileupload");
var path = require("path");
var https = require('https');
var fs = require("fs");
//var cors  = require("cors");
console.log("debug")


// var okta = require("@okta/okta-signin-widget");
var app = express();

var PORT = process.env.PORT || 8000; 



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
//app.use(cors());

app.use(express.static("app/public"));

// app.use(okta);



app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./signin.html"));
})

// https.createServer({
//     key: fs.readFileSync('server.key'),
//   cert: fs.readFileSync('server.cert')
// }, app).listen(PORT, function(){
//     console.log("App listening on PORT " + PORT) ;
// });

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT) ;
});