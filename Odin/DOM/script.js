const container = document.querySelector('#container');

// create a div with class name "container" and display text
const content = document.createElement('div');
content.classList.add('content');
content.textContent = "This is the glorious text content";
container.appendChild(content);

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.

// a <p> with red text that says “Hey I’m red!”
const red = document.createElement('p');
red.textContent = "Hey I'm red!";
red.style.color = 'red';
container.appendChild(red);

// an <h3> with blue text that says “I’m a blue h3!”
const blue = document.createElement('h3');
blue.textContent = "I'm a blue h3!";
blue.style.color = 'blue';
container.appendChild(blue);

const backdrop = document.createElement('div');
backdrop.style.border = '3px solid black';
backdrop.style.backgroundColor = 'pink';

const inside = document.createElement('h1');
inside.textContent = "I'm in a div.";
backdrop.appendChild(inside);

const textInside = document.createElement('p');
textInside.textContent = "ME TOO!";
backdrop.appendChild(textInside);

container.appendChild(backdrop);
