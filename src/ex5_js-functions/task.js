var Сalculator = (function () {

    var result = 0;

    return {
        add: function add(num) {
            if (typeof num === "number") {
                result += num;
            }
            return add;
        },

        subtract: function subtract(num) {
            if (typeof num === "number") {
                result -= num;
            }
            return subtract;
        },

        divide: function divide(num) {
            if (typeof num === "number") {
                result /= num;
            }
            return divide;
        },

        multiply: function multiply(num) {
            if (typeof num === "number") {
                result *= num;
            }
            return multiply;
        },

        getResult: function getResult() {
            return result;
        },

        reset: function reset() {
            result = 0;
            return result;
        },
    };
}());

module.exports = Сalculator;
