function typeOfVar(x) {
var result;
var y = typeof x;
if (y === 'number') {
  result = 'number';
} else if (y === 'string') {
  result = 'string';
} else {
  result = undefined;  
}
return result;
}

module.exports = typeOfVar;