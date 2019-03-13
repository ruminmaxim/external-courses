function biggestNumber(arr) {
var buffer = arr[0];
for (var i=0; i<arr.length; i++) {
if (arr[i] <= buffer) continue;
if (arr[i] > buffer) {
buffer = arr[i];
}
}
return buffer;
}

module.exports = biggestNumber;