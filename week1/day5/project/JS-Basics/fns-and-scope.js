//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  var name = "Tyler";
  function isTyler(name) {
    if (name = "Tyler"){
      return true;
    }
    return false;
  }
  console.log (isTyler());

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
  function getName() {
    var name = prompt("what is your name?");
    return name;
  }

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

  function welcome() {
    alert("Welcome " + getName());
  }

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here

arguments are the ones that send the values using the variables that have been define in the function, and the parameters are the ones that recive the values. /*but the number of argument have to be the same of the parameters*/ the name of the arguments can be different to the parameter or the same and the type of the data of the arguments can be the same to the type of parameter.

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?

  //Answer Here

  the falsy values are "false, null, undefine, 0, NaN, '', (document.all) [1]", and .



//Next Problem



//Create a function called myName that returns your name

  //Code Here
  function myName (){
    return "rey";
  }
  myName();

// or********************************

var name = "rey"
function myName (name){
  return name;
}
myName(name);

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem

//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

  var name = "rey"
  var outerFn= function() {
      return function () {
        return name;
      }
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

  var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
