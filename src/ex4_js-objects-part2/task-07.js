function shorterSentence(str, num) {
    var check = num - str.length;
    if (check < num) {
        str = str.slice(0, num - 1) + '…';
    }
    return str;
}

module.exports = shorterSentence;