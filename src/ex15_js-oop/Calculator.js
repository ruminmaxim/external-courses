function Calculator() {

    Calculator.prototype = Object.create(Object.prototype);
    Calculator.prototype.constructor = Calculator;

    Calculator.prototype.__isNumeric = function(number) {
        return !isNaN(parseFloat(number)) && isFinite(number);
    }

    this.__result = 0;

    this.reset = function () {
        this.__result = 0;
        return this;
    }

    this.add = function (number) {
        if (this.__isNumeric(number)) {
            this.__result += number;
        }
        return this;
    }

    this.multiply = function (number) {
        if (this.__isNumeric(number)) {
            this.__result *= number;
        }
        return this;
    }

    this.subtract = function (number) {
        if (this.__isNumeric(number)) {
            this.__result -= number;
        }
        return this;
    }

    this.divide = function (number) {
        if (this.__isNumeric(number)) {
            this.__result /= number;
        }
        return this;
    }

    this.setState = function (number) {
        if (this.__isNumeric(number)) {
            this.__result = number;
        }
        return this;
    }

    this.get__result = function () {
        return this.__result;
    }

}

var calc = new Calculator();

module.exports = calc;