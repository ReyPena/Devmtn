var user = require("../models/user");

module.exports = {
  user: function (req, res, next) {
    var requestedName = user [req.params.id].name;
    res.status(200).json(requestedName);
  },
  users: function (req, res, next) {
    var names = user.map(function(a) {return a.name;});
    res.status(200).json(names);
  },
  gps: function (req, res, next) {
    var requestLocation = user [req.params.id].location;
    res.status(200).json(requestLocation);
  },
  gpseses: function (req, res, next) {
    var where = user.map(function(a) {return a.location});
    res.status(200).json(where)
  },
  occupations: function (req, res, next){
    var allOcupations = user.map(function(a) {return a.name + ": " + a.occupations});
    res.status(200).json(allOcupations);
  },
  latest: function (req, res, next) {
    var allLatest = user.map(function(a) {return a.name + ": " + a.latestOccupation});
    res.status(200).json(allLatest);
  },
  hobbies: function (req, res, next) {
    var allhobbie = user.map(function(a) {return a.hobbies});
    res.status(200).json(allhobbie);
  },
  hobbiesByType: function (req, res, next) {
    // var typeHobbies = user.map(function(item){
    //   item.hobbies.map(function(secondItem){
    //     if(secondItem.type == req.params.type){
    //       console.log(secondItem.name);
    //       return second Item.name;
    //     }
    //   })
    // });

    var typeHobbies = function () {
      for (var i = 0; i < user.length; i++) {
        for (var user[i] in object) {
          return object.name;
        };
      };
    };
    //
    // var allhobbie = user.map(function(a) {return a.hobbies});
    // var typeHobies =  allhobbie.filter(function(obj){return obj.name === req.params.type});
    // console.log(typeHobies);
    res.status(200).json(typeHobbies);
  }
};
