function capitalizeSentence(str) {
    var arr = str.split(' ');
    for (var key in arr) {
        arr[key] = arr[key][0].toUpperCase() + arr[key].slice(1);
    }
    return arr.join(' ');
}

module.exports = capitalizeSentence;
