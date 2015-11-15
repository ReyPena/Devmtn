var express = require("express");
var bodyParser =  require("body-parser");

var app = express();

app.use(bodyParser.json());

app.get("/users", function (req, res, next) {
  res.status(200).json([{name: "Rick Sanchez", gun: "portal gun"}]);
});

app.post("/users", function (req, res, next) {
  var sentUser = req.body;
  sentUser.status = "new";
  res.status(200).json(sentUser);
});

app.listen(3000, function () {
  console.log("listening to the port 3000");
});
