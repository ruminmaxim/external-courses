var user = Object.create({ a: 'Name', b: 'age' });
user.a = 'Maxim';

function searchInObject(prop, obj) {
    var protoBuffer = Object.getPrototypeOf(obj);
    return protoBuffer[prop];
}

module.exports = searchInObject;