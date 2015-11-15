var user =  require("../models/users");

module.exports = {
  log: function (req, res, next) {
    if (req.body.pass === true) {
      next();
    } else {
      res.status(400).json({message: "invalid"})
    }
  },
  index: function (req res, next) {
    res.status(200).json(./users);
  },
  show: function (req, res, next) {
    var requestedUser = user;
  }
  build: function (req, res, next) {
    users.push(req.body);
    res.status(200).json({message: "users"
    })
  }
}
