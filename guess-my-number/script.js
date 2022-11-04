'use strict';

let number = Math.trunc(Math.random()*20) + 1; 
let score = 20; 
let highScore = 0; 
let reset = false;
let gameLost = false;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value); 
    let currentHighScore = highScore; 

    if (score == 0){
        return;
    }
    else if (reset) {
        return;
    }

    if(!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';
    }
    else if (guess == number) {
        document.querySelector('.message').textContent = '🎉 Correct Number!'; 
        document.querySelector('.number').textContent = number;
        score++;
        highScore += 10;
        console.log('highScore:', highScore);
        if (currentHighScore < highScore) {
            document.querySelector('.highscore').textContent = highScore; 
            currentHighScore = highScore; 
        }
        reset = true; 
        return;
    }
    else if (guess > number) {
        if (score !== 0) {
            document.querySelector('.message').textContent = 'Too high!'; 
            score--;
            document.querySelector('.score').textContent = score;

        }
        else {
            document.querySelector('.message').textContent = '💥You lost the game!'; 
            gameLost = true;
            return;
        }
    }
    else if (guess < number) {
        if (score !== 0) {
            document.querySelector('.message').textContent = 'Too low!'; 
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '💥You lost the game!'; 
            gameLost = true;
            return;
        }
    }
    console.log("score: ", score, "type: ", typeof score);

    if (score == 0){
        document.querySelector('.message').textContent = '💥You lost the game!'; 
        gameLost = true;
        return;
    }

});

document.querySelector('.again').addEventListener('click', function() {
    generateNewNumber();
    document.querySelector('.message').textContent = "Start guessing...";
    reset = false;
    if (gameLost) {
        gameLost = false;
        score = 20;
        document.querySelector('.score').textContent = score;
    }
});

function generateNewNumber() {
    number = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.guess').value = ""; 

}

function resetGame() {
    score = 20; 
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = "Start guessing...";

    console.log('reset');
    reset = false;
}