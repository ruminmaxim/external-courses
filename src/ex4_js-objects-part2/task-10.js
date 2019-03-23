function strReverse(str) {
    var arr = str.split('');
    arr.reverse();
    return arr.join('');
}

module.exports = strReverse;