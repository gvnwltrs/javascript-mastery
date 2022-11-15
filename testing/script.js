'use strict';

let string = "something";
let size = 50;
let rotation = 0; 

// DOM Stuff 

document.querySelector('h1').innerText = `This is going to be ${string}`;

document.querySelector('body').addEventListener('click', () => {
    size--;
    rotation += 45;
    document.querySelector('h1').style.fontSize = `${size}px`; 
    document.querySelector('h1').style.transitionDuration = `3s`; 
    document.querySelector('h1').style.transform = `rotate(${rotation}deg)`;
})

document.querySelector('.btn1').addEventListener('click', ()=> {
    alert('this is happening!');
});

document.querySelector('.btn2').addEventListener('click', ()=> {
    alert('this is happening too!');
});

document.querySelector('h1').onmouseover = function () {
    this.style.color = "#bebebe";
}

document.querySelector('h1').onmouseleave = function () {
    this.style.color = "white";
}

function printSomething() {
    let string = "hello"; 

    console.log(string); 

    console.log(this);
}


// Creating Object Literals 
const person = {
    firstName: 'Dave',
    likes: {
        food: 'pizza',
        games: 'skyrim',
        sport: 'basketball'
    }
}

// Shallow vs. Deep Copies 

// Shallow
let anotherPerson = person; 
const copyPerson1 = Object.assign({}, person); 
const copyPerson2 = {...person}; 

// Deep
const copyPerson3 = JSON.parse(JSON.stringify(person)); 

person.firstName = 'Jules';
anotherPerson.firstName = 'Dorian';
copyPerson1.firstName = 'Lahey';
copyPerson1.likes.food = 'cheese'; 

console.log('person:', person); 
console.log('anotherPerson:', anotherPerson); 
console.log('copyPerson1:', copyPerson1);
console.log('copyPerson2:', copyPerson2);  
console.log('copyPerson3:', copyPerson3);  

// More Object Literals 
const restaurant = {
    name: 'Classico Italiano',
    loc: 'Via Angelo Tavanti 23, Firenze, Italy', 
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'], 
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    orderItem() {
        console.log('Coming Soon!'); 
    }
}; 


// Destructuring Objects and Arrays
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


// Nullish Coalescing Operator 
const cat = null;

console.log(cat ?? 'it does not exist!!'); 


// For-of Loops 
for (const item of restaurant.mainMenu) console.log(item);

for (const categories of restaurant.categories) {
    console.log(categories); 
}

// Enhanced Object Literals 
const restaurant2 = {
    restaurant
}

console.log(restaurant2.restaurant.categories); 


// Looping Objects 
console.log(Object.keys(restaurant));

for (const category of Object.values(restaurant.categories)) console.log('Try this category:', category); 


// Sets 
const ordersSet = new Set([
    'Pasta', 
    'Pizza', 
    'Pizza', 
    'Risotto', 
    'Pasta', 
    'Pizza'
]); 

console.log(ordersSet); 

// Maps 
const rest = new Map(); 
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy'); 

console.log(rest.set(2, 'Lisbon, Portugal'))

// String Manipulation
const myString = "testing";
console.log(myString.slice(1,3)); 

// Object Hacking 
const dog = {
    type: 'German Shepard'
}

function makeDogBark(theDog) {
    theDog.type = "Poodle"; 

    theDog = {action: "woof"}; 
}

makeDogBark(dog); 

console.log(dog); 


// Functions Returning Functions

function myThing1(word) {
    return function (start) {
        console.log(`${start} and ${word}`);
    };  
}

const test = myThing1('goodbye'); 

console.log(test('hello')); 

// Changing This 
const feline = {
    eyes: 'brown',
    whiskers: 4, 
    meow: 'raaaar!',

    makeNoise(test) {
        console.log(`His eyes are ${this.eyes} and he sounds like ${this.meow}, ${test}`); 
    }
}; 

const kitty = {
    eyes: 'green', 
    whiskers: 6, 
    meow: 'meow...'
}

const lion = {
    eyes: 'yellow', 
    whiskers: 6, 
    meow: 'roooooooaaaarrrrr!!!!!!!'
}

feline.makeNoise('help!!'); 
feline.makeNoise.call(kitty, 'wow.');
feline.makeNoise.call(lion, 'holy s***!');

const animal = feline.makeNoise.bind(kitty, 'omg!!!'); 
animal(); 

// Immediately Invoked Function 
(function() {
    console.log('it worked!'); 
})(); 

// Closures 
const secureBooking = function() {
    let passengerCount = 0; 

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`); 
    }
}

const booker = secureBooking(); 

booker(); 
booker(); 
booker(); 

let f;

const go = function() {
    const a = 23; 
    f = function() {
        console.log(a * 2); 
    }
}

go(); 
f();

// Looping Arrays 
let box = [1, 2, 3, 4, 5]; 

box.forEach(function (element, i, arr) {
    console.log(`did something: ${element}` ); 
    console.log(`did something: ${i}` ); 
    console.log(`did something: ${arr}` ); 
}); 

// Timers
setTimeout(() => console.log('again'), 3000); 