function objectLog(str, obj) {
    for (var prop in obj) {
        if (prop !== str) {
            obj[str] = 'new';
        }
        return obj;
    }
}

module.exports = objectLog;
