function Hangman(word) {
    this.secretWord = word.toLowerCase();
    this.userWord = "_".repeat(word.length);
    this.errorsLeft = 6;
    this.wrongLetters = [];

    this.guess = function (letter) {
        check = letter.toLowerCase();
        if (this.secretWord.indexOf(check) != -1) {
            var userWordCreating = [];
            for (i = 0; i < this.secretWord.length; i++) {
                if (this.secretWord[i] === check) {
                    userWordCreating.push(check)
                }
                else if (this.userWord[i] != '_') {
                    userWordCreating.push(this.userWord[i])
                }
                else {
                    userWordCreating.push('_')
                }
            }
            this.userWord = userWordCreating.join("");
            console.log(this.userWord);
            if (this.secretWord == this.userWord) {
                console.log('You won!');
            }
        }
        else {
            this.errorsLeft -= 1;
            this.wrongLetters.push(check);
            console.log('wrong letter, attempts left ' + this.errorsLeft + ' | ' + this.wrongLetters);
        }
        return this;
    }

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
        console.log(this.userWord+" | errors left "+this.errorsLeft);
        return this;
    } 

    this.startAgain = function (word) {
        this.secretWord = word.toLowerCase();
        this.userWord = "_".repeat(word.length);
        this.errorsLeft = 6;
        this.wrongLetters = [];
        return this;
    }

}
var hangman = new Hangman('webpurple');


module.exports = hangman;