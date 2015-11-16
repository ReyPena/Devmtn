var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var cors = require("cors");
var userCtrl = require("userCtrl");
var profileCtrl =  require("profileCtrl");

var corsOptions = {
  origin: 'http://localhost:8999'
};

var app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret }));

// app.get('/example', cors(), function( req, res ) {
// 	//This route is CORS enabled across all origins
// });
//
// app.get('/example-two', function( req, res ) {
// 	//This route is not CORS enabled
// });

app.listen(8999, function () {
  console.log("listen to port 8999");
});
