function typeOfVar(x) {
var result, y = typeof x;

if ((y === 'number') && (isNaN(x) !== true)) {
  result = 'number';
} 
else if (y === 'string') {
  result = 'string';
}
return result;
}

module.exports = typeOfVar;