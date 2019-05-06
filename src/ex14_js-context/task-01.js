function Calculator() {

    this.result = 0;

    this.reset = function () {
        this.result = 0;
        return this;
    }

    this.add = function (number) {
        if (number !== undefined) {
            this.result += number;
        }
        return this;
    }

    this.multiply = function (number) {
        if (number !== undefined) {
            this.result *= number;
        }
        return this;
    }

    this.subtract = function (number) {
        if (number !== undefined) {
            this.result -= number;
        }
        return this;
    }

    this.divide = function (number) {
        if (number !== undefined) {
            this.result /= number;
        }
        return this;
    }

    this.setState = function (number) {
        if (number !== undefined) {
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