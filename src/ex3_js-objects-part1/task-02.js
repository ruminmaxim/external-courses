function objectLog(form) {
    for (var prop in form) {
        console.log(prop +": " + form[prop])
    }
}

module.exports = objectLog;