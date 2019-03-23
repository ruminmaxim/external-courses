function strLowerCamelCase(str) {
    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (i === 0) {
            arr[i] = arr[i][0].toLowerCase() + arr[i].slice(1).toLowerCase();
        } else {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
        }
    }
    return arr.join('');
}

module.exports = strLowerCamelCase;