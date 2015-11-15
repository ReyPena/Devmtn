var arr = [1, 2, 3, 4, 5];
var arrTwo = [2, 8, 20]
function PrintEvens(arr) {
    for (var i=0; i<arr.length; i+=1) {
        if (arr[i] % 2 === 0) {
            console.log(arr [i]);
        }
    }
}
PrintEvens(arr);
PrintEvens(arrTwo);
