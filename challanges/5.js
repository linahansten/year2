import readline from "read-console-input";

const secretNumber = Math.floor((Math.random() * 100) + 1);

let guesses = [];
guesses.push(Number(readline("guess a number 1-100: ")))
let win = false;
let guessCount;

while (win == false) {
    if (secretNumber < guesses.slice(-1)) {

        console.log("secret number is below: " + guesses.slice(-1) + " ");
        guesses.push(Number(readline("guess a number 1-" + guesses.slice(-1) + ": ")))
    }
    if (secretNumber > guesses.slice(-1)) {
        console.log("secret number is above: " + guesses.slice(-1));
        guesses.push(Number(readline("guess a number " + guesses.slice(-1) + "-100: ")))
    }

    if (guesses.slice(-1) == secretNumber) {
        guessCount = guesses.length
        if (guessCount == 1) {
            console.log("You guessed the secret number in " + guessCount + " try!")
        } else {
            console.log("You guessed the secret number in " + guessCount + " tries!")
        }
        win = true
    }
}

console.log(secretNumber)