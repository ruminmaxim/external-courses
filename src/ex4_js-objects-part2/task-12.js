function roundingNumber(num1, num2) {
    return Math.round((num1 + num2) * 1000) / 1000;
}

module.exports = roundingNumber;