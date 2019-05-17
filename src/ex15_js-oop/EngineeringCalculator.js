function EngineeringCalculator() {
    Calculator.call(this);
}

EngineeringCalculator.prototype = Object.create(Calculator.prototype);
EngineeringCalculator.prototype.constructor = EngineeringCalculator;

EngineeringCalculator.prototype.sin = function () {
    this.__result = Math.sin(this.__result);
    return this;
}

EngineeringCalculator.prototype.cos = function () {
    this.__result = Math.cos(this.__result);
    return this;
}

EngineeringCalculator.prototype.log = function () {
    this.__result = Math.log(this.__result);
    return this;
}

EngineeringCalculator.prototype.log10 = function () {
    this.__result = Math.log10(this.__result);
    return this;
}