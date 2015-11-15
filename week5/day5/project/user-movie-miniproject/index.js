var express = require("express");
var bodyParser = require("body-parser");

var usersCtrl = require("./controllers/usersCtrl");
var moviesCtrl = require("./controllers/moviesCtrl");


var app = express();

app.use(bodyParser.json());
// 
// app.use("/users", function (req, res, next) {
//   console.log("path", req.path);
//   console.log("body", req.body);
//   next();
// });

// this are teh users
app.get("/users", usersCtrl.index);
app.get("/users/:id", usersCtrl.show);
app.post("/users", usersCtrl.build);
app.put("/users/:id", usersCtrl.update);
app.delete("/users/:id", usersCtrl.destroy);

// this are the movies
// app.get("/movies", moviesCtrl.index);
// app.get("/movies/:id", moviesCtrl.index);
// app.post("/movies", moviesCtrl.build);
// app.put("/movies/:id", moviesCtrl.update);
// app.delete("/movies/:id", moviesCtrl.destroy);

app.listen(3000, function () {
  console.log("listening on port", 3000);
});
