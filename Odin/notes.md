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

## Flexbox

