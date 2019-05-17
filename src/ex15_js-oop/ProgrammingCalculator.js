function ProgrammingCalculator() {
    Calculator.call(this);
}

ProgrammingCalculator.prototype = Object.create(EngineeringCalculator.prototype);
ProgrammingCalculator.prototype.constructor = ProgrammingCalculator;

ProgrammingCalculator.prototype.decToBin = function(number) {
    if (this.__isNumeric(number)) {
        this.__result = number.toString(2);
    }
    return this;
} 