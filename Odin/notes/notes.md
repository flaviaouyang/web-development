# Notes

---

---

# Foundation

---

## CSS

* Basic syntax: selector, property and value;
### Selectors: 
1. Universal selector: every element would have the style applied to it
```css
* {
	color: purple;
}
```
2. Type selector: select all elements of the given type
```html
<div>Hello, World</div>
<div>Hi</div>
<p>funny</p>
```
```css
div {
	color: white;
}
```
3. Class selector: select all elements with the given class
```html
<div class="alert">
	this is an alert
</div>
```
```css
.alert {
	color: red;
	font-weight: bold;
}
```
4. ID selector: select an element with the given ID
```html
<div id="title">My cool page</div>
```
```css
#title {
	background-color: red;
}
```
5. Grouping selector
```css
.read {
	color: white;
	background-color: black;
	font-size: 12px;
}

.unread {
	color: white;
	background-color: black;
	font-size: 60px;
}

/* or this could be written as */
.read,
.unread {
	color: white;
	background-color: black;
}

/* ... */
```
6. Chaining selector
```html
<div>
	<div class="subsection header">Latest Posts</div>
	<p class="subsection preview">This is a preview</div>
</div>
```
```css
.subsection.header {
	color: red;
}
/* now this style will only apply to elements with both subsection and header class */
```
7. Descendant combinator: combine multiple selectors differently than grouping or chaining; will only cause elements that match the last selector to be selected if they also have an ancestor (parent, grandparent, etc) that matches the previous selector

### Properties
1. `color` and `background-color`
```css
p {
	/* hex */
	color: #000000;
	/* rgb */
	color: rgb(0, 0, 0);
	/* hsl */
	color: hsl(0, 0%, 0%);
```
2. Typography Basics and `text-align`
```css
p {
	font-family: "Times New Roman";
	font-size: 22px;
	font-weight: bold;
	/* or a number between 1 and 1000*/
	/* font-weight: 700; */
	text-align: center;
}
```
3. Image Height and Width
```css
img {
	height: auto;
	width: 500px;
}
```
### Adding CSS to HTML
1. External CSS
```html
<head>
	<link rel="stylesheet" href="styles.css" />
</head>
```
2. Internal CSS
```html
<head>
	<style>
		div {
			color: white;
		}
	</style>
</head>
```
3. Inline CSS
```html
<body>
	<div style="color: white; background-color: black;">hello there</div>
</body>
```

## DOM - Document Object Model

- DOM is a tree-like representation of the contents of a webpage
	- a tree of *nodes* with different relationships depending on the way they are arranged in the HTML document

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
const container = document.querySelector('#container');
// select the #container div

console.dir(container.firstElementChild);
// select the first child of #container, aka .display

const controls = document.querySelector('.controls');
// select .controls div

console.dir(controls.previousElementSibling);
// selec the prior sibling aka .display
```

### DOM methods

- When the HTML code is parsed by a web browser, it is converted to the DOM. These nodes are objects with many properties and methods attached. And those properties and methods are the primary tool for us to manipulate our webpage.

### Query Selectors

- `element.querySelector(selector)` returns reference to the first match of `selector``
- `element.querySelectorAll(selectors)` returns a 'nodelist' containing references to all of the matches of the `selectors`
	- Note `querySelectorAll()` does not return an array

### Element Creation

- `document.createElement(tagName, [options])` creates a new element of tag type tagName. `[options]` means you can add optional parameters to the function

```js
const div = document.createElement('div')
```

- This function **does not** put the new element into DOM. It simply creates it in memory, so that you can manipulate the element.

### Append Elements

- `parentNode.appendChild(childNode)` appends `childNode` as the last child of `parentNode`
- `parentNode.insertBefore(newNode, referenceNode)` inserts `newNode` into `parentNode` before `referenceNode`

### Remove Elements

- `parentNode.removeChild(child)` removes `child` from `parentNode` on the DOM and returns reference to `child`.

### Altering Elements

- When you have a reference to an element, you can use the reference to alter the element's own properties. You can add/remove and alter attribute, change classes, add inline style information and more

```js
const div = document.createElement('div');
// create a new div referenced in the variable 'div'

//add inline style
div.style.color = 'blue';
div.style.cssText = 'color: blue; background: white';
div.setAttribute('style', 'color:blue; background: white');

// more inline CSS properties
div.backgroundColor = 'red';
div.border = '1px solid black';
div.width = '100px';
div.height = '100px';
```

- **Note**: when accessing a **kebab-cased** css rule from JS, you need to use camelCase or bracket notation instead of dot notation.

```js
div.style.backgound-color //DOES NOT WORK
div.style.backgroundColor //works
//or
div.style['background-color']
dov.style.cssText = "background-color: white"; //when used in a string it's okay
```

### Editing Attributes

```js
div.setAttribute('id', 'theDiv');
// if id exists update it to 'theDiv' else create an id with value "theDiv"

div.getAttribute('id');
//returns value of specified attribute

div.removeAttribute('id');
//removes specified attribute
```

### Working with classes

```js
div.classList.add('new');
// adds class "new" to your new div

div.classList.remove('new');
// removes "new" class from div

div.classList.toggle('active');
// if div doesn't have class 'active' then add it
// if it does, then remove it
```

- **Note**: it is standard to toggle a CSS style rather than adding and removing inline CSS

### Adding text content

```js
div.textContent = 'Hello World!'
// creates a text node containing "Hello World!"
// and inserts it in div
```

### Adding HTML content

```js
div.innerHTML = '<span>Hello World!</span>';
// renders the html inside div
```

- **Note**: `textContent` is preferable for adding text and `innerHTML` should be used sparingly as it can create security risks if missed.

- **Keep in mind**: JS does **NOT** alter your HTML, but the DOM. HTML file will look the same, but JS changes what the vrowser renders.

### Important Note:

- JS code is ran when the JS file is ran or when the script tage in encountered in the HTML. If you include your JavaScript at the top of your file, many of the DOM manipulation methods will not work.

	- You should include your Javascript at the bottom of your HTMl file so that it is ran after the DOM nodes are parsed and created
	- Alternatively, you can link the JS file in the `<head>` of your HTML document. Use `<script>` tag with the `src` attribute containing the path to the JS file, and include `defer` keyword to load the file *after* the HTML is parsed

	```html
	<head>
	    <script src="script.js" defer></script>
	</head>
	```

## Events

- Events make things happen dynamically. They are actions that occur on your webpage such as mouse-clicks or keypresses, and using JavaScript we can make our webpage listen and reacy to these events

- Three primary ways to go about this:

	1. Attach functions' attributes directly on your HTML elements 

		```html
		<button onclick="alert('hello world')">Click me</button>
		```

	2. Set `on_event_` property on the DOM object in your JS

		```html
		<button id="btn">
		    Click me
		</button>
		```

		```js
		const btn = ducoment.querySelector('#btn');
		btn.onclick = () => alert("Hello World");
		```

	3. Attach even listeners to the nodes in JS

		```html
		<button id="btn">
		    click me too
		</button>
		```

		```js
		const btn = document.querySelector('#btn');
		btn.addEventListener('click', () => {
		    alert("Hello World");
		});
		```

- All 3 of these methods also work with named functions

```html
<button onclick="alertFunction()">
    Click me baby
</button>
```

```js
function alertFunction() {
    alert("YAY! THANKS FOR CLICKING!");
}

// method 2
btn.onclick = alertFunction;

/ /method 3
btn.addEventListener('click', alertFunction);
```

### Attaching listeners to groups of nodes

```html
<div id="container">
    <button id="1">
        Click me
    </button>
    <button id="2">
        Click me
    </button>
    <button id="3">
        Click me
    </button>
</div>
```

```js
const buttons = document.querySelectorAll('button');
// use .forEach method to iterate through each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});
```

Here is a complete list of DOM events and their description.

[HTML DOM Events](https://www.w3schools.com/jsref/dom_obj_event.asp)

## Git Fork-and-Branch Workflow

- The *fork and branch* workflow is a common way of collaborating on open source projects using **Git** and **GitHUb**

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
	1. log into GitHub with your account
	2. Find the GitHub repository that you'd like to work with
	3. Click the Fork button

- **Make a local clone**: find URL for the forked repository and use `git clone url`

- **Adding a Remote**: 

	- Git already added a Git remote named `origin` to the clone of the Git repository. 
	- This will allow you to push changes back up to the forked repository using `git commit` and `git push`
	- To use the *fork and branch* workflow, you need to add a Git remote pointing back to the **original** repository.
		- you can name the git remote anything, one recommendation is **upstream**

- **Working in a Branch**

	1. create and checkout a *feature* branch

		`git checkout -b <new branch name>`

	2. make changes to the files

	3. commit your changes to the branch

- **Pushing changes to GitHub**: `git push origin <new branch name>`

- **Opening a Pull Request**: 

	- GitHub will prompt you to create a pull request. 
	- The maintainers of the original project can use this pull request to pull your changes across to their repository, 
	- and if they approve, merge them into the main repo.

- **Cleaning up** after a merged pull request

	1. update local clone `git pull upstream master`
	2. delete feature branch `git branch -d <branch name>`
	3. update master branch in forked repository: `git push origin master`
	4. Push deletion of the feature branch to GitHub repository `git push --delete origin <branch name>`

- **Keeping your fork in sync**

	- `git pull upstream master` //pull changes from original repository
	- `git push origin master` //push changes to your forked repository

## Objects

- An object can be created with figure brackets `{}` with an optional list of properties.

	- a property is composed of **key: value** pair
		- **key**: a string or a property name
		- **value**: can be anything

	![Obect](img/object.png)

	- An **empty object** or **empty cabinet** can be created using one of two syntaxes

```js
let user = new Object();
let user = {};
// usually use the figure brackets
// this declaration is called an object literal
```

- an Object with content

```js
let user = {
	name: "John",
	age: 30
};
```

- **add a boolean value** `user.isAdmin = true;`

- **remove a property**: `delete user.age;`

- **multiword** property names are allowed, but **must be enclosed in quotes**

- **Sqaure brackets**:

	- **dot notation** does not work for multiword properties

	- ```js
		let user = {};
		user["likes birds"] = true;
		alert(user["likes birds"]);
		delete user["likes birds"];
		```

- **computed properties**:

	- use square brackets in an object literal

	- ```js
		let fruit = prompt("Which fruit to buy?", "apple");
		let bag = {
		    [fruit]: 5,
		};
		alert(bag.apple); // 5 if fruit = "apple"
		```

	- `[fruit]` means that the property name should be taken from `fruit`

- **Property value shorthand**

```js
function makeUser (name, age) {
    return {
        name: name,
        age: age,
    };
}
let user = makeUser("John", 30);
alert(user.name);

// properties have the same names as variables
// here is a shorthand
function makeUser(name, age){
    return {
        name,
        age
    };
}
```

- `in` operator:

	- `"key" in object`

- `for...in`loop:

	- ```js
		for (key in object) {
		    //executes body for each key among object properties
		}
		```

## Intermediate Arrays

- `array.prototype.filter()`

```js
const inventor = [
    //this is an array of inventors
    // ...
];

const female = inventor.filter(function(inventor) {
   if(inventor.sex === "female") {
       return true; //this will keep it
   } else {
       return false;
       // return anything but true will lose it
   }
});

// or the same thing using arrow function
const female = inventor.filter(inventor => inventor.sex === "female")

console.table(female);
// this will show a table of female inventors
```



## Introduction to the Back End

- **backend** are the part of a website or software program that users do not see.
- Most modern websites are **dynamic** meaning webpage content is generated on-the-fly. 
	- A dynamic page contains one or more **scripts** that run on the **web server** each time the page is accessed.
- **Examples** of backend processes:
	1. processing an incoming webpage request
	2. running a script (PHP, ASP, JSP) to generate HTML
	3. access date from a database using SQL queries
	4. storeing or updating records in a database
	5. encrypting and decrypting data
	6. handling file uploads and downloads
	7. Process user input via JS

### Back-End Web Architecture**

- Back-end is the code that runs on the server, that receives requests from the clients, and contains the logic to send the appropriate data back to the client. 

### HTTP Requests

- **HTTP** stands for Hypertext Transfer Protocol
- HTTP is used to **structure requests and responses over the internet**
- The transfer of resouces happens using TCP (Transmission Control Protocol).
	- TCP manages the channels between your browser and the server.
	- TCP is used to manage many types of internet connections in which one machine wants to send something to another. 

---

---

# Full Stack JavaScript

---

## JavaScript

