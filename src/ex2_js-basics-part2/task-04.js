function duplicatesCheck(arr) {

var buffer = arr[0], check;
for (var i=0; i<arr.length; i++) {
if (buffer == arr[i]) {check = true;}
if (buffer != arr[i]) {check = false; break;}
}
return check;
}

module.exports = duplicatesCheck;