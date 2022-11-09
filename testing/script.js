
let string = "something";
let size = 50;
let rotation = 0; 

document.querySelector('h1').innerText = `This is going to be ${string}`;

document.querySelector('body').addEventListener('click', () => {
    size--;
    rotation += 10;
    document.querySelector('h1').style.fontSize = `${size}px`; 
    document.querySelector('h1').style.transform = `rotate(${rotation}deg)`;;
})