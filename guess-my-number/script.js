'use strict';

// console.log(document.querySelector('.message').textContent); 
// document.querySelector('.message').textContent = '🎉 Correct Number!'; 

// document.querySelector('.number').textContent = 90; 
// document.querySelector('.score').textContent = 10; 

// document.querySelector('.guess').value = 23; 
// console.log(document.querySelector('.guess').value);

const number = Math.trunc(Math.random()*20) + 1; 

document.querySelector('.check').addEventListener('click', function() {
    // console.log('testing'); 
    // console.log(document.querySelector('.guess').value); 

    const guess = Number(document.querySelector('.guess').value); 
    console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';
    }
    else if (guess == number) {
        document.querySelector('.message').textContent = '🎉 Correct Number!'; 
        document.querySelector('.number').textContent = number;
    }
    else if (guess > number) {
        document.querySelector('.message').textContent = 'Too high!'; 
    }
    else {
        document.querySelector('.message').textContent = 'Too low!'; 
    }
});

document.querySelector('.again').addEventListener('click', function() {
    // console.log('testing'); 
})