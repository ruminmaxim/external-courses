function Calculator() {

    function isNumeric(number) {
        return !isNaN(parseFloat(number)) && isFinite(number);
    }

    this.result = 0;

    this.reset = function () {
        this.result = 0;
        return this;
    }

    this.add = function (number) {
        if (isNumeric(number) === true) {
            this.result += number;
        }
        return this;
    }

    this.multiply = function (number) {
        if (isNumeric(number) === true) {
            this.result *= number;
        }
        return this;
    }

    this.subtract = function (number) {
        if (isNumeric(number) === true) {
            this.result -= number;
        }
        return this;
    }

    this.divide = function (number) {
        if (isNumeric(number) === true) {
            this.result /= number;
        }
        return this;
    }

    this.setState = function (number) {
        if (isNumeric(number) === true) {
            this.result = number;
        }
        return this;
    }

    this.getResult = function () {
        return this.result;
    }

    this.fetchData = function (callback) {
        setTimeout(function () { callback(500) }, 2000);
        return this;
    }
}

var calc = new Calculator();

module.exports = calc;