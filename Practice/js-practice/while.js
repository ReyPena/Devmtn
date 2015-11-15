var list = [1, 2, 3, 4, 5];
var numberToFind = 4;
var stillLooking = true;
var index = 0;

while (stillLooking) {
    var element = list[index];
    
    console.log(element);
    
    if (element === numberToFind) {
        stillLooking = false;
    }
    
    index += 1;
}