/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });

and what you should write is the sayHi function that makes the code above work,
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });

*/

  //Code Here for first

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var first = function(names, cb){
 cb(names[0]);
}
first(names, function(firstName){
  console.log('The first name in names is ' + firstName);
});

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

  //Code Here for last

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var last = function(names, cb){
 cb(names[names.length - 1]);
}

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

  //Code Here for multiply
  var multiply = function (a, b, cb) {
    cb( a *= b );
  }

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


  //Code Here for contains

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var contains = function (names, str, cb) {
  cb(function () {
  if (names.indexOf("Colt") !== -1){
    return true;
  }
  return false;
});
}

-------------------------------------------------or
function contains (names, name, cb) {
  var result;
  if (names.indexOf(name) !== -1){
    result = true;
  }
  else {
    result = false;
  }
  cb(result)
};

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


    //Code Here for uniq

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var uniqArr = [];
var uniq  = function (names, cb) {
  for (var i = 0; i < names.length; i++) {
    if(uniqArr.indexOf(names[i]) == -1){
      uniqArr.push(names[i]);
    }
  };
  cb(uniqArr);
};

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

    //Code Here for each

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var indice = "Tyler";
var item = names.indexOf(item);
var each = function (name,cb) {
  cb(indice, item);
};

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

var getUserById = function (user, cb){
  for(var i = 0; i < user.length; i++) {
    if (users[i].id === "16t"){
      cb(user[i]);
    }
  };
};

getUserById(users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});