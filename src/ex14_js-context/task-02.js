function Hangman(word) {

    this.guess = function (check) {
        if (this.secretWord.indexOf(check) === -1) {
            this.errorsLeft -= 1;
            this.wrongLetters.push(check);
            console.log('wrong letter, attempts left ' + this.errorsLeft + ' | ' + this.wrongLetters);
        }
        let secretArr = this.secretWord.split('');
        let outputArr = this.userWord.split('');
        var result = secretArr.reduce(function (result, nextLetter, index) {
            if (nextLetter === check) {
                return result + check;
            }
            else if (outputArr[index] !== '_') {
                return result + outputArr[index];
            } 
                return result + '_';
            
        }, '');
        this.userWord = result;
        if (this.secretWord == this.userWord) {
            console.log('You won!');
        }
        return this.userWord;
    };

    this.getGuessedString = function () {
        console.log(this.userWord);
        return this.userWord;
    }

    this.getErrorsLeft = function () {
        console.log(this.errorsLeft);
        return this.errorsLeft;
    }

    this.getWrongSymbols = function () {
        console.log(this.wrongLetters);
        return this.wrongLetters;
    }

    this.getStatus = function () {
        console.log(this.userWord + " | errors left " + this.errorsLeft);
        return this;
    }

    this.startAgain = function (word) {
        this.secretWord = word.toLowerCase();
        this.userWord = "_".repeat(word.length);
        this.errorsLeft = 6;
        this.wrongLetters = [];
        return this;
    }

    this.startAgain(word);
}

var hangman = new Hangman('webpurple');

module.exports = hangman;