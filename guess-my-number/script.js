'use strict';

// console.log(document.querySelector('.message').textContent); 
// document.querySelector('.message').textContent = '🎉 Correct Number!'; 

// document.querySelector('.number').textContent = 90; 
// document.querySelector('.score').textContent = 10; 

// document.querySelector('.guess').value = 23; 
// console.log(document.querySelector('.guess').value);

const number = Math.trunc(Math.random()*20) + 1; 
let score = 20; 
let guesses = 10; 
let highScore = 0; 

function resetGame() {
    number = Math.trunc(Math.random()*20) + 1; 
    score = 20; 
    guesses = 10; 
    document.querySelector('.score').textContent = this.score;
    document.querySelector('.guesses').textContent = this.guesses;
}

function generateNumber() {
    number = Math.trunc(Math.random()*20) + 1;
}

document.querySelector('.check').addEventListener('click', function() {
    // console.log('testing'); 
    // console.log(document.querySelector('.guess').value); 

    const guess = Number(document.querySelector('.guess').value); 
    console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';
    }
    else if (guesses == 0) {
        document.querySelector('.message').textContent = 'Game over!'; 
        resetGame(); 
    }
    else if (guess == number) {
        document.querySelector('.message').textContent = '🎉 Correct Number!'; 
        document.querySelector('.number').textContent = number;
        score++;
        guesses--;
        generateNumber();
    }
    else if (guess > number) {
        if (score !== 0) {
            document.querySelector('.message').textContent = 'Too high!'; 
            score--;
            document.querySelector('.score').textContent = score;
            guesses--;
            document.querySelector('.guesses').textContent = guesses;

        }
        else {
            document.querySelector('.message').textContent = '💥You lost the game!'; 
        }
    }
    else if (guess < number) {
        if (score !== 0) {
            document.querySelector('.message').textContent = 'Too low!'; 
            score--;
            document.querySelector('.score').textContent = score;
            guesses--;
            document.querySelector('.guesses').textContent = guesses;
        }
        else {
            document.querySelector('.message').textContent = '💥You lost the game!'; 
        }
    }
    console.log("score: ", score, "type: ", typeof score);

});

document.querySelector('.again').addEventListener('click', function() {
    // console.log('testing'); 
})