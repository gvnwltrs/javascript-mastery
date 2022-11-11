'use strict';

let string = "something";
let size = 50;
let rotation = 0; 

document.querySelector('h1').innerText = `This is going to be ${string}`;

document.querySelector('body').addEventListener('click', () => {
    size--;
    rotation += 45;
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
anotherPerson.firstName = 'Dorian';

console.log(person); 
console.log(copyPerson); 
console.log(anotherPerson); 


const restaurant = {
    name: 'Classico Italiano',
    loc: 'Via Angelo Tavanti 23, Firenze, Italy', 
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'], 
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto']
}; 

const arr = [2,3,4];
const a = arr[0];
const b = arr[1]; 
const c = arr[2]; 

const [x, y, z] = arr; 
console.log(x, y, z); 

const [e, g] = arr;
console.log(e, g); 

let {name, loc, categories} = restaurant;
console.log(name, loc, categories); 

console.log(name);

const cat = null;

console.log(cat ?? 'it does not exist!!'); 