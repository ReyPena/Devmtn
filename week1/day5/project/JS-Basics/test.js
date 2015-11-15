function counter(){
  var num = 0;
  var reset =  false;
  return function addhere (){
    if (num < 5){
    return num += 1;
  }else if (num === 5 && !reset ){
    num=0;
    reset =  true;
  }else {
    return "this is fup";
  }
  }
}
var ryan = counter();
