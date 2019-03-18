function copyObj(obj) {
    var clone = {}
    for (var prop in obj) {
        clone[prop] = obj[prop];
    }
    return clone;
}

module.exports = copyObj;