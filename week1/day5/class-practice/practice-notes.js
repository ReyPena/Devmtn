// variables
var myAge = 21;
var myName = "Rey";
var myKids = ["abortion, condoms", "pinesChop"]

// Condition Statements (if/then/else):

if (myAge === 21){
  console.log("im still cool.");
}
// falsy Statements (empty sting, 0, flase, null, undefine, NaN)
// Function Declaration

function DoubleNumber(number) {
  console.log(number * 2);
}

// function invocation (by name of the function or variable + ())

DoubleNumber();

// or

console.log(myAge());

// Scope
// In JavaScript, scope is the set of variables, objects, and functions you have access to.

function Grandpa(){
  var name = "Grandpa";
  function Dad(){
  function Son(){
    console.log(name);
  }
  son();
}
Dad();
}

// Clousures
// this are function into a function
function Person(first, last) {
  function SayName() {
    console.log(first + " " + last);
  }
  console.log("Done");
  return SayName;
}

var person = Person(Rey)
person();

function function_name(argument) {
  // body...
}
