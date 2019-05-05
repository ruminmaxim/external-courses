function strCounter(str) {
    var obj = {}
    for (var i = 0; i < str.length; i++) {
        var word = str.charAt(i);
        if (word in obj) {
            obj[word]++;
        } else {
            obj[word] = 1;
        }
    }
    for (var key in obj) {
        console.log(key + obj[key]);
    }
    return obj;
}

module.exports = strCounter;
