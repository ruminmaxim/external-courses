function sliceMethod(array, begin, end) {
    var newArray = [];
    var beginArray = begin;
    var endArray = end;
    if (!beginArray) {
        beginArray  = 0;
    }
    if (beginArray  < 0) {
        beginArray  = array.length + begin;
    }
    if (endArray < 0) {
        endArray = array.length + end;
    }
    if (!endArray) {
        endArray = array.length;
    }
    for (var i = beginArray; i < endArray; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}
module.exports = sliceMethod;
