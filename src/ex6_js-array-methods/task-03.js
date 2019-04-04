function everyMethod(array, callback) {
    var buffer = callback(array[0], i, array);
    for (i = 0; i < array.length; i++) {
        if (buffer === (callback(array[i], i, array))) {
            buffer = callback(array[i], i, array);
        }
        else {
            return false;
        }
    }
    return true;
}
module.exports = everyMethod;
