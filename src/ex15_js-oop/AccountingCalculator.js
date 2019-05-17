function AccountingCalculator() {
    Calculator.call(this);
}

AccountingCalculator.prototype = Object.create(Calculator.prototype);
AccountingCalculator.prototype.constructor = AccountingCalculator;

AccountingCalculator.prototype.UsdToRub = function(number) {
    if (this.__isNumeric(number)) {
        this.__result = (number*65).toFixed(3);
    }
    return this;
}

AccountingCalculator.prototype.RubToUsd = function(number) {
    if (this.__isNumeric(number)) {
        this.__result = (number/65).toFixed(3);
    }
    return this;
}

AccountingCalculator.prototype.round = function(number) {
    if (this.__isNumeric(number)) {
        this.__result = Math.round(number)
    }
    return this;
} 