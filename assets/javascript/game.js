var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 10;

var winsCounter = document.getElementById("wins-counter");
var lossesCounter = document.getElementById("losses-counter");
var guessesLeft = document.getElementById("guesses-left");
var guessed = document.getElementById("guessed");

document.onkeyup = function (event) {
    var userGuess = event.key;

    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    if (guesses === 0) {
        guesses = 10;
        losses++;
    }
    else {
        if (userGuess === computerGuess) {
            wins++;
            guesses = 10;
        }
        else {
            guesses--;
        }
    }

    winsCounter.textContent = wins;
    lossesCounter.textContent = losses;
    guessesLeft.textContent = guesses;
    guessed.textContent = userGuess;

};