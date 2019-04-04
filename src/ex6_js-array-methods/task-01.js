function sliceMethod(array, begin, end) {
    var newArray = [];
    if (begin === undefined) {
        begin = 0;
    }
    if (begin < 0) {
        begin = array.length + begin;
    }
    if (end < 0) {
        end = array.length + end;
    }
    if (end === undefined) {
        end = array.length;
    }
    for (var i = begin; i < end; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}
module.exports = sliceMethod;
