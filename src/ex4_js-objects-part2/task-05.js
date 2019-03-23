function searchString(str, search) {
    if (str.indexOf(search) === -1) {
        return false;
    }
    return true;
}

module.exports = searchString;
