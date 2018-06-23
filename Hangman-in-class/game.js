
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersUsed = [];
var displayedWord = [];
var wrongLetters = [];
var words = ["fast", "slow", "tall", "short", "javascript"];
var randomWord = Math.floor(Math.random() * words.length);
























document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
document.getElementById("lettersUsed").innerHTML = "Letters already used: " + lettersUsed;
