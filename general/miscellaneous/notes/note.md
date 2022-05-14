# General Notes

## Looping

- **for loop**

```javascript
for (initializer; condition; final - expression) {
  //code to run
}

for (let i = 0; i < 10; i++) {
  console.log("cool beans");
}
```

## Test Driven Development (TDD)

- TDD refers to the practice of **writing automated tests that describe how your code should work before actually writing the code**

## The argument object

- Arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
  - arguments has a `length` property and is indexed from zero

```javascript
function func1(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}
```

- `arguments` object is a local variable available within all non-arrow functions
  - each argument can also be set or reassigned
- You can convert arguments to an array
  - `const args = Array.from(arguments);`
  - `const args = [...arguments];`

## Spread syntax

- `...` allows an iterable such as an array expression or string to be expanded in places where zero or more arguments or elements are expected, or an object expression to be expanded in places where zero or more key-value pairs are expected.

## DOM Manipulation

- DOM (or Document Object Model) is a tree-like representation of the contents of a webpage
  - a tree of **nodes** with different relationship depending on how they're arranged in the HTML document
- Targeting nodes with selectors
- When HTML code is parsed by a browser, it is converted to the DOM

## Query Selectors

- They help us target nodes
- `element.querySelector(selector)` returns reference to the first match of `selector`
- `element.querySelectorAll(selectors)` returns a nodelist containing references to all of the matches of the `selectors`
  - does not return array
  - Looks like array, acts like array but is _nodelist_

## Element creation

- `document.createElement(tagName, [options])` creates a new element of tag type tagName. `[options]` means you can add optional parameters

```js
const div = document.createElement("div");
```

## Append Elements

- `parentNode.appendChild(childNode)` appends `childNode` as the last child of `parentNode`
- `parentNode.insertBefore(newnode, referenceNode)` inserts `newNode` into `parentNode` before `referenceNode`

## Remove Elements

- `parentNode.removeChild(child)` removes `child` from `parentNode` on the DOM and returns reference to `child`

## Values, Types, and Operators

- **backtick-quoted** strings are called _template literals_

```javascript
`half of 100 is ${100 / 2}`;
```

- When you write something inside `${}` in a template literal, its result will be computed, converted to a string, and included at that position.
- **ternary operator**: `true ? 1 : 2`

## Function

- **arrow functions**

```js
const myFunc = function () {
  const myVar = "value";
  return myVar;
};

// in arrow function syntax
const myFunc = () => {
  const myVar = "value";
  return myVar;
};
```

- When there is no function body and only a return value, `return` can be omitted.

```js
const myFunc = () => "value";
```

- **Passing arguments** into arrow function

```js
const doubler = (item) => item * 2;
double(4);
```

- **Only one parameter**, parentheses can be omitted

```js
const doubler = (item) => item * 2;
```

- **Passing multiple parameters**

```js
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

```javascript
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

// one parameter. () can be omitted
const square = (x) => {
  return x * x;
};
//or
const square = (x) => x * x;
```

- **The call stack**: every time a function is called, the current context is stored on top of this stack. when a function returns, it removes the top context from the stack and uses that context to continue execution.

  - When the stack grows too big, the computer will fail with a message "out of stack space"

- **optional argument**: JS ignores extra arguments passed, and assign `undefined` to missing parameters

  - if you write `=` after a parameter, the value of the expression will replace the argument when it is not given.

  ```javascript
  function power(base, exponent = 1) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  }

  console.log(power(4));
  // return -> 4
  console.log(power(4, 2));
  // return -> 16
  ```

- **Closure**: being able to reference a specific instance of a local binding in an enclosing scope is called _closure_

  ```javascript
  function multiplier(factor) {
    return (number) => number * factor;
  }
  let twice = multiplier(2);
  console.log(twice(5));
  // 10
  ```

## DOM - Document Object Model

- DOM is a tree-like representation of the contents of a webpage
  - a tree of _nodes_ with different relationships depending on the way they are arranged in the HTML document

```html
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
```

- `.display` is a child of `.container` and a sibiling to `.controls`

### Targeting Nodes with Selectors

- In DOM, you use **selectors** to target the nodes you want to work with. You can use a combination of CSS-style selectors and relationship properties to target the nodes you want
  - Selectors to refer to `<div class="display"></div>`
    1. `div.display`
    2. `.display`
    3. `#container > .display`
    4. `div#container > div.display`
  - Relational selectors with special properties owned by the nodes can also be used.

```js
const container = document.querySelector("#container");
// select the #container div

console.dir(container.firstElementChild);
// select the first child of #container, aka .display

const controls = document.querySelector(".controls");
// select .controls div

console.dir(controls.previousElementSibling);
// selec the prior sibling aka .display
```

### DOM methods

- When the HTML code is parsed by a web browser, it is converted to the DOM. These nodes are objects with many properties and methods attached. And those properties and methods are the primary tool for us to manipulate our webpage.

### Query Selector

- `element.querySelector(selector)` returns reference to the first match of `selector``
- `element.querySelectorAll(selectors)` returns a 'nodelist' containing references to all of the matches of the `selectors`
  - Note `querySelectorAll()` does not return an array

### Element Creation

- `document.createElement(tagName, [options])` creates a new element of tag type tagName. `[options]` means you can add optional parameters to the function

```js
const div = document.createElement("div");
```

- This function **does not** put the new element into DOM. It simply creates it in memory, so that you can manipulate the element.

### Append Element

- `parentNode.appendChild(childNode)` appends `childNode` as the last child of `parentNode`
- `parentNode.insertBefore(newNode, referenceNode)` inserts `newNode` into `parentNode` before `referenceNode`

### Remove Element

- `parentNode.removeChild(child)` removes `child` from `parentNode` on the DOM and returns reference to `child`.

### Altering Element

- When you have a reference to an element, you can use the reference to alter the element's own properties. You can add/remove and alter attribute, change classes, add inline style information and more

```js
const div = document.createElement("div");
// create a new div referenced in the variable 'div'

//add inline style
div.style.color = "blue";
div.style.cssText = "color: blue; background: white";
div.setAttribute("style", "color:blue; background: white");

// more inline CSS properties
div.backgroundColor = "red";
div.border = "1px solid black";
div.width = "100px";
div.height = "100px";
```

- **Note**: when accessing a **kebab-cased** css rule from JS, you need to use camelCase or bracket notation instead of dot notation.

```js
div.style.backgound - color; //DOES NOT WORK
div.style.backgroundColor; //works
//or
div.style["background-color"];
dov.style.cssText = "background-color: white"; //when used in a string it's okay
```

### Editing Attributes

```js
div.setAttribute("id", "theDiv");
// if id exists update it to 'theDiv' else create an id with value "theDiv"

div.getAttribute("id");
//returns value of specified attribute

div.removeAttribute("id");
//removes specified attribute
```

### Working with classes

```js
div.classList.add("new");
// adds class "new" to your new div

div.classList.remove("new");
// removes "new" class from div

div.classList.toggle("active");
// if div doesn't have class 'active' then add it
// if it does, then remove it
```

- **Note**: it is standard to toggle a CSS style rather than adding and removing inline CSS

### Adding text content

```js
div.textContent = "Hello World!";
// creates a text node containing "Hello World!"
// and inserts it in div
```

### Adding HTML content

```js
div.innerHTML = "<span>Hello World!</span>";
// renders the html inside div
```

- **Note**: `textContent` is preferable for adding text and `innerHTML` should be used sparingly as it can create security risks if missed.

- **Keep in mind**: JS does **NOT** alter your HTML, but the DOM. HTML file will look the same, but JS changes what the vrowser renders.

### Important Note

- JS code is ran when the JS file is ran or when the script tage in encountered in the HTML. If you include your JavaScript at the top of your file, many of the DOM manipulation methods will not work.

  - You should include your Javascript at the bottom of your HTMl file so that it is ran after the DOM nodes are parsed and created
  - Alternatively, you can link the JS file in the `<head>` of your HTML document. Use `<script>` tag with the `src` attribute containing the path to the JS file, and include `defer` keyword to load the file _after_ the HTML is parsed

  ```html
  <head>
    <script src="script.js" defer></script>
  </head>
  ```

## Git Fork-and-Branch Workflow

- The _fork and branch_ workflow is a common way of collaborating on open source projects using **Git** and **GitHUb**

- **Overview**:
  - Fork a GitHub Repository
  - Clone the forked repository to your local system
  - Add a Git remote for the original repository
  - Create a feature branch in which to place your changes
  - Make your changes to the new branch
  - Commit the changes to the branch
  - Push the branch to GitHub
  - Open a pull request from the new branch to the original repo
  - Clean up after your pull request is merged
- **Fork a GitHub repository**: forking is making a copy of the repository, but with a line back to the original

- log into GitHub with your account
- Find the GitHub repository that you'd like to work with
- Click the Fork button

- **Make a local clone**: find URL for the forked repository and use `git clone url`

- **Adding a Remote**:

  - Git already added a Git remote named `origin` to the clone of the Git repository.
  - This will allow you to push changes back up to the forked repository using `git commit` and `git push`
  - To use the _fork and branch_ workflow, you need to add a Git remote pointing back to the **original** repository.
    - you can name the git remote anything, one recommendation is **upstream**

- **Working in a Branch**

- create and checkout a _feature_ branch

`git checkout -b <new branch name>`

- make changes to the files

- commit your changes to the branch

- **Pushing changes to GitHub**: `git push origin <new branch name>`

- **Opening a Pull Request**:

  - GitHub will prompt you to create a pull request.
  - The maintainers of the original project can use this pull request to pull your changes across to their repository,
  - and if they approve, merge them into the main repo.

- **Cleaning up** after a merged pull request

- update local clone `git pull upstream master`
- delete feature branch `git branch -d <branch name>`
- update master branch in forked repository: `git push origin master`
- Push deletion of the feature branch to GitHub repository `git push --delete origin <branch name>`

- **Keeping your fork in sync**

  - `git pull upstream master` //pull changes from original repository
  - `git push origin master` //push changes to your forked repository

## Intermediate Arrays

- `array.prototype.filter()`

```js
const inventor = [
  //this is an array of inventors
  // ...
];

const female = inventor.filter(function (inventor) {
  if (inventor.sex === "female") {
    return true; //this will keep it
  } else {
    return false;
    // return anything but true will lose it
  }
});

// or the same thing using arrow function
const female = inventor.filter((inventor) => inventor.sex === "female");

console.table(female);
// this will show a table of female inventors
```

- `array.prototype.map()` will return an array of asked Information

```js
const fullName = inventor.map((inventor) => inventor.first + inventor.last);
```

- `array.prototype.sort()` will sort

```js
const oldToYoung = inventor.sort(function (a, b) {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});

// or with arrow function and ternerary operator
const oldToYoung = inventor.sort((a, b) => (a.year ? 1 : -1));
```

## Objects and Object constructors

- define objects with **object literal** syntax:

```js
const myObject = {
  property: "value",
  otherProperty: 77,
  "function property": function () {
    //dp stuff
  },
};
```

- getting information
  - dot notation: `myObject.property` //value
  - bracket notation: `myObject["function property"]` //function

## Objects as a Design Pattern

- Group things into objects to organize

```js
const playerOne = {
  name: "tim",
  marker: "X",
};

const playTwo = {
  name: "jenn",
  marker: "O",
};
```

- **Object constructors**: duplicate a specific type of object

```js
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(name);
  };
}

//call the function with keyword new
const player = new Player("steve", "X");
console.log(player.name); // 'steve'
player.sayName(); //'steve'
```

## Switch statements

- `switch` statement tests a value and can have many _case_ statements which define various possible values. Statements are executed from the first matched `case` value until a `break` is encountered.

```js
switch (lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}

switch (val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
}
```

- `case` values are tested with strict equality (`= = =`)
- `break` tells JS to stop executing statements.
- If `break` is omitted, the next statement will be executed.
- **default option**: add `default` statement which will be executed if no matching `case` statements are found

```js
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
  default:
    defaultStatement;
    break;
}
```

- **multiple identical options**

```js
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

- **replace `if else` chains with `switch`**

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}

switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
    break;
}
```

## Objects

- **Objects** are similar to **arrays** except that instead of using indexes to access and modify their data, you access the data in objects through `properties`
- Objects are useful for storing data in a structured way, and can represent real world objects

```js
const cat = {
  name: "whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"],
};
```

- **access object properties with dot notation**:
  - two ways to access the properties of an object
    1. dot notation: `.`
    2. bracket notation: `[]`

```js
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
  cool: "very",
};

const coolValue = testObj.cool;
const entreeValue = testObj["an entree"];
```

- access Object Properties with Variables **use bracket notation, not dot notation**

```js
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle",
};
const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
```

- **Update object properties**

```js
const ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};

ourDog.name = "Happy Camper";
//or
ourDog["name"] = "Happy Camper";
```

- **Add new properties** to a JavaScript Object

```js
ourDog.bark = "bow-wow";
//or
ourDog["bark"] = "bow-wow";
```

- **Delete properties** from a JavaScript Object

```js
delete ourDOg.bark;
```

- **Check if properties exist in object**

```js
const myObj = {
  top: "hat",
  bottom: "pants",
};
myObj.hasOwnProperty("top");
// return true
myObj.hasOwnProperty("middle");
// return false
```

- **Manipulating Complex Objects**
  - [JavaScript Object Notation](https://www.json.org/json-en.html) or `JSON` is a related data interchange format used to store data.

```js
const ourMusic = [
  {
    artist: "Daft Punk",
    title: "Homework",
    release_year: 1997,
    formats: ["CD", "Cassette", "LP"],
    gold: true,
  },
];

// this is an array that contains an object
// the object has various pieces of metadata about an album
// it has a formats array
```

- **Accessing Nested Objects**:

```js
const ourStorage = {
  desk: {
    drawer: "stapler",
  },
  cabinet: {
    "top drawer": {
      folder1: "a file",
      folder2: "secrets",
    },
    "bottom drawer": "soda",
  },
};

ourStorage.cabinet["top drawer"].folder2; //secret
ourStorage.desk.drawer; //stapler
```

- **Accessing Nested Arrays**:

```js
const ourPets = [
  {
    animalType: "cat",
    names: ["Meowzer", "Fluffy", "Kit-Cat"],
  },
  {
    animalType: "dog",
    names: ["Spot", "Bowser", "Frankie"],
  },
];

ourPets[0].names[1]; //fluffy
ourPets[1].names[0]; // spot
```

## While Loops

```js
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

## For loops

```js
// for(a; b; c)
// a is the initialization statement
// b is the condition statement
// c is the final expression

for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

## Do...While loops

- Execute `do` code no matter what, then continue to run the loop `while` the specified condition evaluates to `true`

```js
const ourArray = [];
let i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

## Recursion

- **recursion** is the concept that a function can be expressed in terms of itself.

## Random

- `Math.random()` generates a random decimal number between `0` (inclusive) and `1`(exclusive)
- **Generate whole number**: `Math.floor(Math.random * num)`
- **Generate whole number within a range**: `Math.floor(Math.random() * (max-min+1)) + min`

## Cast String into Integer

- `parseInt()` function parses a string and returns an integer

```js
const a = parseInt("007");
```

- `parseInt()` takes a second argument for radix which specifies the base of the number in the string
  - `radix` can be an integer between **2 and 36**.
  - `parseInt(string, radix);`

## Use Conditional (Ternary) Operator

- `a ? b : c` where `a` is the condition, `b` is the code to run when the condition is `true`, and `c` is the code to run when the condition return `false`

```js
function findGreater(a, b) {
  if (a > b) {
    return "a is greater";
  } else {
    return "b is greater or equal";
  }
}

// use ternary operator
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
```

- **Multiple ternary operators**

```js
function findGreaterOrEqual(a, b) {
  return a > b ? "Greater" : a === b ? "Equal" : "smaller";
}
```

## Scopes of the `var` and `let` keywords

- `var` is local if declared inside a function
  - global is declared outside a function
- `let` is local if declared inside a block, statement, or expression.

```js
for (var i = 0; i < 3; i++) {
  console.log(i);
}

// i is a global variable

for (let j = 0; j < 5; j++) {
  console.log(j);
}

// j is  local
```

## Mutate an Array Declared with `const`

- Objects (including arrays and functions) assigned to a variable using `const` are still mutable. It only **prevents reassignment** of the variable identifier.

```js
const s = [5, 6, 7];
s = [1, 2, 3]; // this will result in an error
```

## Prevent Object Mutation

- To ensure your data doesn't change, `Object.freeze` will prevent data mutation.

```js
let obj = {
  name: "cool",
  review: "good",
};
Object.freeze(obj);
obj.review = "bad"; // this will result in an error
```

## Set default parameters for your functions

```js
const greeting = (name = "Anonymous") => "Hello" + name;
console.log(greeting());
console.log(greeting("John"));
```

## Use the Rest Parameter with Function Parameters

- With rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments";
}

console.log(howMany(0, 1, 2)); // 3
console.log(howMany("string", null, [1, 2, 3], {})); // 4
```

- The rest parameter eliminates the need to check the `args` array and allows us to apply `map()`, `filter()` and `reduce()` on the parameters array

## Use the spread operator to evaluate Arrays In-Place

- _spread operator_ lets us expand arrays and other expressions in places where multiple parameters or elements are expected.
- `apply()` computes the maximum value in an array

```js
let arr = [6, 89, 3, 45];
let maximus = Math.max.apply(null, arr);

//return 89
```

- `Math.max(arr)` will return `NaN`

  - Because `Math.max()` expects comma-separated arguments, but not an array.

  ```js
  const arr = [6, 89, 3, 45];
  const maximus = Math.max(..arr);
  ```

  - `...arr` returns an unpacked array
    - in other words, it spreads the array

- Spread operator only works in-place.

- `const spreaded = ...arr;` will not work

## Destructuring Assignment

- _Destructuring assignment_ is used for neatly assigning values taken directly from an object

```js
const user = { name: "John Doe", age: 34 };
const name = user.name;
const age = user.age;

// destructuring syntax
const { name, age } = user;
```

- Give new variable names in the assignment

```js
const { name: userName, age: userAge } = user;
```

- **Nested Objects**

```js
const user = {
  johnDoe: {
    age: 34,
    email: "johndoe@cool.mail",
  },
};

const {
  johnDoe: { age, email },
} = user;
const {
  johnDoe: { age: userAge, email: userEmail },
} = user;
```

- **Arrays**:
  - Differences between destructuring assignment and spread operator: **you cannot pick which elements with spread operator**

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
//a is 1
//b is 2
const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
//a is 1 b is 2
//c is 5
```

- **Rest parameter and arrays**:

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5];
// a = 1
// b = 2
// arr = [3, 4, 5]
```

## `three.js`

[three.js documentation](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)

## Preparation

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My first three.js app</title>
    <style>
      body {
        margin: 0;
      }
    </style>
  </head>
  <body>
    <script src="js/three.js"></script>
    <script>
      // Our Javascript will go here.
    </script>
  </body>
</html>
```

and put [three.js](https://threejs.org/build/three.js) in the `js` folder

## Creating the scene

- We need **three things**:
  1.  scene
  2.  camera
  3.  renderer

```javascript
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

- Different **cameras** in `three.js`
  - here we are using `PerspectiveCamera`
  - first attribute is **field of view** or (FOV): <u>the extent of the scene that is seen on the display at any given moment (in degrees)</u>
  - second attribute is **aspect ratio**: almost always is the <u>width of the element divided by the height</u>
  - Next two attributes are **near** and **far** clipping plane: _objects further away from the camera than the value of **far** or closer than **near** won't be rendered_
- **renderer**: in addition to creating the renderer, we need to **set the size** at which we want our app to be rendered
  - for a performance intensive app, give `setSize` smaller values
  - render at a lower resolution, set the third argument (`updateStyle`) as false, e.g., `setSize(window.innerWidth, window.innerHeight, false)`
- Finally, we **add the `renderer` element to our HTML document**

## Creating the cube

```js
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
```

- `BoxGeometry` is <u>an object that contains all the points (**vertices**) and fill (**faces**) of the cube.</u>
- `material` is used to color the cube
- `Mesh` is <u>an object that takes a geometry, and applies a material to it</u>
- `scene.add()` to add the cube to the scene, but by default its coordinates is (0,0,0)
  - Which means the camera and object are inside each other, therefore, we need to move the camera out a bit

## Rendering the scene

```javascript
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
```

- we need a `render/animate loop`
  - this is a loop that **causes the renderer to draw the scene every time the screen is refreshed**

![product so far](img/cube.png)

## Animating the cube

```javascript
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
```

- Run every frame
- **Anything that you wish to move or change while the app is running has to go through the `animate loop`**

## Installation (ISSUES\*\*)

1. `npm install --save three`

2. Import:

   ```javascript
   // import the entire core lib
   import * as THREE from "three";
   const scene = new THREE.Scene();
   ```

   ```javascript
   // import just the part i need
   import { Scene } from "three";
   const scene = new Scene();
   ```

## Drawing lines

```javascript
import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

## define a material for lines

```javascript
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
// there is also LineDashedMaterial
```

## Create a geometry with some vertices

```js
const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
pointpoints.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);
```

```js
const line = new THREE.Line(geometry, material);
```

```js
scene.add(line);
renderer.render(scene, camera);
```

## NPM

- set up package.json (important information about your project)

  - manual approach `npm init`
  - default approach `npm init -y`

- install a package

  - add to dependencies property of package.json

- dev dependency

  - `-D` or `--save-dev`
  - don't need it in the productions
  - examples of dev dependencies are linting, nodemon, etc...

- scripts

```JSON
"scripts" {
  "start": "node app.js"
},
```

- `package-lock.json`
  - have specific versions for all packages so it's compatible with version changes
