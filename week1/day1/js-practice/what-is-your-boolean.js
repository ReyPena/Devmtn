// II- WHAT IS YOUR BOOLEAN?

// 2- loop through the falsies array, console.logging the boolean value of each element:
// Use the double bang !!
// !!6; => true
// !!""; => false

var falsies = ["", 0, null, undefined,false , NaN];

for (var i = 0; i < falsies.length; i += 1) {
    // code here
    console.log (!!falsies[i]);
}