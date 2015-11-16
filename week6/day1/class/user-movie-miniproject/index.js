var express = require("express");
var bodyParser = require("body-parser");
var cors =  require("cors");

var usersCtrl = require("./controllers/usersCtrl");
var moviesCtrl = require("./controllers/moviesCtrl");

var logger = function(req, res, next) {
  console.log('\n\n------------------------------\n------------------------------\n\n');
  console.log('\n___HEADERS___\n', req.headers);
  console.log('\n___BODY___\n', req.body);
  console.log('\n___SESSION___\n', req.session);
  next();
};

var app = express();

app.use(session({
  secret: 'gweriwrb-erfawrg45-oasWsd',
  saveUninitialized: true,
  resave: true
}));

app.use(express.static("public"));
app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.use(logger);


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

app.post("/cart", function (res, req, next) {
  if(!req.session.cart){
    req.session.cart= [];
  }
  req.session.cart.push(req.body);
  res.status(200).json(req.session.cart);
})

// this are the movies
// app.get("/movies", moviesCtrl.index);
// app.get("/movies/:id", moviesCtrl.index);
// app.post("/movies", moviesCtrl.build);
// app.put("/movies/:id", moviesCtrl.update);
// app.delete("/movies/:id", moviesCtrl.destroy);

app.listen(3000, function () {
  console.log("listening on port", 3000);
});
