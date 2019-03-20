function objectLog(str, obj) {
    for (var prop in obj) {
        if (prop !== str) {
            return false;
        }
        return true;
    }
}

module.exports = objectLog;