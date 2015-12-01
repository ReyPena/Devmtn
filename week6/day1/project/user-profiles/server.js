var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var cors = require("cors");
var config = require("./config");
var userCtrl = require("./controllers/userCtrl");
var profileCtrl =  require("./controllers/profileCtrl");

var app = express();

var corsOptions = {
  origin: 'http://localhost:8999'
};


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret }));

app.post("/api/login", userCtrl.login);
app.get('/api/profiles', profileCtrl.addFriends);
// app.get('/example-two', function( req, res ) {
// 	//This route is not CORS enabled
// });

app.listen(3000, function () {
  console.log("listen to port 3000");
});
