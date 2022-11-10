'use strict';

let string = "something";
let size = 50;
let rotation = 0; 

document.querySelector('h1').innerText = `This is going to be ${string}`;

document.querySelector('body').addEventListener('click', () => {
    size--;
    rotation += 25;
    document.querySelector('h1').style.fontSize = `${size}px`; 
    document.querySelector('h1').style.transitionDuration = `1s`; 
    document.querySelector('h1').style.transform = `rotate(${rotation}deg)`;
})

function printSomething() {
    let string = "hello"; 

    console.log(string); 

    console.log(this);
}

const person = {
    firstName: 'Dave'
}

const copyPerson = Object.assign({}, person); 
let anotherPerson = person; 

person.firstName = 'Jules';
copyPerson.firstName = 'Lahey';

console.log(person); 
console.log(copyPerson); 
