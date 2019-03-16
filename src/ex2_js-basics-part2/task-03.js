function arrCounter(arr) {
var countZero = 0, countOdd = 0, countEven = 0;
    for (var i=0; i<arr.length; i++) {
        if (typeof arr[i] === "number" ) {
            if (arr[i] === 0) {
            countZero++
            } 
            else if (arr[i]%2 === 0) {
            countEven++
            }
            else if (arr[i]%2 !== 0){
            countOdd++
            }
            } 
    }
return [countEven, countOdd, countZero];
}  

module.exports = arrCounter;    