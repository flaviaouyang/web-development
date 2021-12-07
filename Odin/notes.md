# Notes

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



