//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here

  var inner = outer();

//Once you do that, invoke inner.

  //Code Here

  inner();


//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + num;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here
  var friend = "Jake";
  var num = ("435-215-9248");
  console.log (callFriend());


//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here
  function makeCounter() {
    var num = 0
    return function addme () {
      return num += 1;
    }
    }
  var count = makeCounter();
  console.log (count()); // 1
  console.log (count()); // 2
  console.log (count()); // 3
  console.log (count()); // 4



//Next Problem



/*
  Write a function that does something simple (console, alert, etc). Write a second function that accepts the first function as it's first parameter. The second function should return a new third function which, when invoked, invokes the first, original function that was passed in, but will only ever do so once.
*/

  //Code Here
  function firstFunc () {
    console.log(".l.");
  }
  function seconFunc(inputfunc) {
    return function () {
      inputfunc();
    }
  }
  var somethingnew = seconFunc(firstFunc);
    somethingnew();

//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. The first parameter will be an anonymous function and the second parameter, 'N', will be a number. Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/

function fnCounter(N, anonymous) {
  for (var i = 1; i < N; i+=1){
    anonymous();
  }
  return "stop";
}
fnCounter(69,function(){
  console.log ("doesnt matter to me!!")
});



//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

    //Answer Here
  every second will display 1, 2,...5

  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Answer Here
    no, it return 6 every sec


  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/

    //Code Here

    var counter = function(){
      for (var i=1; i<=5; i++) {
        setTimeout( function timer(num){
            console.log( num );
        }, i*1000, i );
      }
    };
    counter();

//Next Problem



/*
  Make the following code work

  function addNums (){
    var funcArray = [];
    var i = 0;
    while (i <= 5) {


    }
  }
  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/
