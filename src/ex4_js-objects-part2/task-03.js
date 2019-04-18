function spaceCut(str) {
    if(str.charAt(0) === ' ') {
        str = str.slice(1);
    }
    if(str.charAt(str.length - 1) === ' ') {
        str = str.slice(0, str.length - 1);
    return str;
}
}

module.exports = spaceCut;