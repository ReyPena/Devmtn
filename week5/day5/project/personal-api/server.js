var express = require("express");
var bodyParser = require("body-parser");

// controllers
var mainCtrl = require("./controllers/mainCtrl.js");
var middleware = require("./controllers/middleware.js")

var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get("/name/:id", mainCtrl.user);
app.get("/names", mainCtrl.users);
app.get("/location/:id", mainCtrl.gps);
app.get("/locations", mainCtrl.gpseses);
app.get("/occupations", mainCtrl.occupations);
app.get("/occupations/latest", mainCtrl.latest);
app.get("/hobbies", mainCtrl.hobbies);
app.get("/test", mainCtrl.hobbiesByType);


app.listen(3000, function () {
  console.log("listening on port ", 3000);
})
