function strIntoStr(inStr, str, num) {
    var arr = inStr.split(' ');
    arr.splice(num + 1, 0, str);
    return arr.join(' ');
}

module.exports = strIntoStr;