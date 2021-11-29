# JavaScript Fundamentals

---

## How to Run JavaScript Code

- run via browser

	- simplest way: create an HTML file with JS code inside

	```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>JS 101</title>
	</head>
	<body>
	    
	    <script>
	        // js code goes here
	        console.log("Hello world!");
	    </script>
	</body>
	</html>
	```
	
- run from command line: `node filename.js`

---

## Variables

- create a variable: `var foo`, `let moo`, `const poo!`

```javascript
let message; //create a variable using let
message = 'Hello'; //store the string 'Hello' in variable message

alert(message); //show the variable content

let user = 'John', age = 25, message = 'Hello';
//create multiple variables in one line (not recommended)
```

- In older scripts, people use `var` instead of `let`.
- Declaring twice will trigger a `SyntaxError`
- Variable naming:

	1. Contain only letters, digits, `$` and `_`
	1. first character cannot be a digit
	1. *camelCase*is commonly used
	1. JS is case sensitive
	1. no reserved names like `break`, `case`, `catch`, etc
	

## Constants

- Declare a constant (unchanging) variable with `const`
	- constants cannot be reassigned
	- constants are named using CAPITAL_LETTERS and UNDERSCORES
		- only Upper case for constants that are **hard-corded**

```javascript
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
```

---

## Numbers

- JS only has one type of number. can be written with or without decimals

	- `let x = 3.14` or `let y = 3`

- Extra large or extra small numbers can be written with scientific notation

	- `let x = 123e5` or `let y - 123e-5`

- Always 64-bit Floating Point

- Integers are accurate up to 15 digits

- Adding Numbers and Strings

	- `+` can add numbers and concatenate strings
	- if `number + string`, the result will be a string concatenation

- Numeric strings

	- strings can have numeric content

	- JS will try to convert strings to numbers

	- ```javascript
		let x = "100";
		let y = "10";
		let z = x / y;
		// output: 10
		//note: + will not work
		```

- `NaN` : Not a Number

	- arithmetic involving a non-numeric string will result in `NaN`
	- `isNaN()` can find out if a value is not a number

- `Infinity or -Infinity` is what JS will return is a calculation is outside the largest possible number

	- division by zero also generate `Infinity`

- Normally JS numbers are primitive values

	- but numbers can also be defined as objects with `new` keyword
	- `let y = new Number(123)`

- **Arithmetic Operators**

	- `**` exponentiation, same as `Math.pow(x,y)`
	- `++` increment and `--` decrement

- Useful Number methods

	- `toFixed()`: round number to a fixed number of decimal places
	- convert string to number: `Number()`

---

## Data Types

- There are 8 basic data types in JS. We can put any type in a variable. JS is **dynamically typed** meaning that variables are not bound to any data types.

### Number

- The *number* type represents both integer and floating point numbers.
- There are also *special numeric values*
	1. `Infinity`
	2. `-Infinity`
	3. `NaN`: represents a computational error. Any further operation on `NaN` returns `NaN`

### BigInt

- `Number` type cannot be larger than `2^53-1` or less than `-2^53+1`
- `BigInt` is created by appending `n` to the end of an integer
	- `const EARTH = 829179821792719823918739872981293183191819n;`

### String

- A string in JS must be surrounded by quotes

```javascript
let str = "hello";
let str2 = 'single quote is also okay'
let phrase = `can embed another ${str}`;
```

- There are 3 types of quotes:
	1. double quote: `"Hello"`
	2. single quote: `'hello'`
	3. Backsticks: `` (extended functionality quotes)
		- use them to embed variables and expressions into a string by wrapping them in `${...}`

```javascript
let name = "John";
alert(`Hello, ${name}`);
alert(`the result is ${1+2}`);
```

- Multiline strings: write on multiple lines with backsticks or use `\n`
- Methods:
	- `strName.length`: returns the length of a string
	- `slice()` method: extracts a part of a string and returns the extracted part in a new string
		- takes two parameters: start position and the end position (exclusive)
		- `let part = str.slice(7, 13);`
	- `substring()` method: similar to `slice()` but `substring()` does not accept negative indexes
		- if second parameter omitted, the rest of the string will be sliced
	- `substr()` similar to `slice()`
		- second parameter is the **length** of the extracted part
	- `replace()` replaces a specified value with another value in a string
		- only replace the first match
			- to replace all matches: `/nice/g`
		- Case-sensitive
			- to make case-insensitive: `/COOL/i`
	- `toUpperCase()`: convert a string to upper case
	- `toLowerCase()`: convert to lower case
	- the `concat()` method: joins two or more strings
	- `trim()` removes whitespace from both sides of a string
	- string padding: 
		- `padStart` and `padEnd` to support padding at the beginning and end of a string
	- `charAt()` method: returns the character at s specific index
		- `charCodeAt()`: returns the unicode of the character at a specific index
	- convert a string to an array: `spilt()` method

```javascript
let text = "hello there";
let upperText = text.toUpperCase();

let text2 = "alright";
let text3 = text1.concat(" ", text2)

let whiteSpace = "    hello.     ";
let noWhitespace = whiteSpace.trim

let a = "5";
let aPadded = a.padStart(4, 0);
//output: 0005

text.split(",") //spilt on commas
```

### Boolean

- Boolean has only two values: `true` and `false`
- `let isCool = true;`

### The `null` value

- the special `null` value does not belong to any of the types described above
- `null` represents nothing, empty or value unknown

### The `undefined` value

- `undefined` represents "value is not assigned"

### Objects and Symbols

- `object` type is special; different from primitive types
	- Used to store collections of data and more complex entities
- `symbol` type is used to create unique identifiers

### The `typeof` operator

- `typeof` will return the type of the argument
- has two syntax
	1. `typeof x`
	2. `typeof(x)`

## Conditionals

### Comparisons

- greater / lesser than: `a > b`, `a < b`
- Greater / lesser than or equal to: `a >=b, a <= b`
- Equal: `===`
- not equal: `!=!`

![Screen Shot 2021-11-22 at 4.27.09 PM](/Users/flaviaouyang/Library/Application Support/typora-user-images/Screen Shot 2021-11-22 at 4.27.09 PM.png)

### if statement

```javascript
if (condition){
	...
} else if (condition) {
    ...
} else {
    ...
}
```

### logical operators

- `||`: or
- `&&`: and
- `!`: not
- `??`: nullish coalescing

### switch statements

```javascript
switch (expression) {
	case choice1:
		run this code
		break;
	
	case choice2:
		run this code instead
		break;
		
	default:
		just run this code
}
```

### Ternary operator

```javascript
( conditon ) ? run this code : run this code instead

let greeting = ( isBirthday ) ? 'Happy BDay' : 'cool';
```

---

## Functions

## Built-in browser functions

- `replace()` string function takes a source string, and a target string and replaces the source string with the target string, and returns the newly formed string

```javascript
let myText = 'I am a string';
let newText = myText.replace('string', 'pizza');
console.log(newText)

// output: I am a pizza
```

- `join()` array function takes an array, joins all the array items together into a single string, and returns this new string

```javascript
let myArray = ['I', 'Love', 'Austyn'];
let joinString = myArray.join(' ');
console.log(joinString);
//output: I love Austyn
```

- `Math.random()` function generates a random number between 0 and up to but not including 1, and returns that number

## Functions versus methods

- **Functions** that are part of objects are called **methods**.

```javascript
function functionName(){
	// statements go here
}

functionName();
//calling the function
```

## Anonymous functions

```javascript
//you can create a function that doesn't have a name

function(){
    alert('hello');
}

myButton.onlclick = function() {
    alert('hello');
}
```

- An **anonymous function** won't do anything on its own. Generally you use an anonymous function along with an event handler.
- You can also **assign an anonymous function to be the value of a variable**.

```javascript
const myGreeting = function() {
    alert('hello');
}
myGreeting();
// you can assign the function to be the value of multiple variables
let anotherGreeting = myGreeting;
```

## Function return values

- Functions without return values, their return value is `void` or `undefined`
- `return;` without a value will cause the function to exit immediately and return `undefined`
- never add a newline between `return` and the value

## Default values

- We can specify the so-called *default* value for a parameter in the function declaration using `=`:
	- default can also be another function

```javascript
function showMessage(from, text="no text given"){
    alert(from + ": " + text);
}

showMessage("Ann");
//output: Ann: notext given
```

- **Alternative default parameters**: we can also assign default values for parameters in the function 

```javascript
//check if the parameter is passed during the function execution by comparing it with undefined
function showMessage(text){
//...

	if (text === undefined){
    	text = 'empty message';
	}
    alert(text);
}
showMessage();

//or we can use ||
function showMessage(text){
//...

	text = text || 'empty';
    alert(text);
}
showMessage();

//or use the nullish coalescing operator ??
function showCount(count){
    //if count is undefined or null, show unknown
    alert(count ?? "unknown");
}
showCount();
showCount(null);
```

## Function expressions

- this is called **Function Declaration**

```javascript
function sayHi(){
	aler("Hello");
}
```

- This is called a **Function Expression**

```javascript
let sayHi = function(){
	alert("Hello");
};
```

- We can print out the value of `sayHi` and it will show the function code
- Do not forget the semicolon at the end

## Callback functions

- pssing functions as values and using function expressions

```javascript
//write a function ask(question, yes, no)
//question: text of the question
//yes: functions to run if yes
//no, functions to run if no

function ask(question, yes, no){
    if(confirm(question)) yes()
    else no();
}

function showOk(){
    alert('You agreed.');
}

function showCancel(){
    alert('You canceled the execution.');
}

ask("Do you agree?", showOk, showCancel);
```

- The arguments `showOk`, `showCancel` are called **callback functions** or just **callbacks**.
- We can use function expression to write the same function but much shorter.

```javascript
function ask(question, yes, no){
    if (confirm(question)) yes()
    else no();
}

ask(
	"Do you agree?",
    function() {alert("You agreed.");},
    function() {alert("You canceled the execution.");}
);
```

## Function Expression vs Function Declaration

- A function expression is created the execution reaches it and is usable only from that moment
	- **A functon declaration can be called earlier than it is defined**
- When a Function declaration is within a code block, it's visible everywhere inside that block but not outside of it.
	- to combat this, we can use function expression and assign it to a variable that is declared outside of the code block.

## Arrow functions

- Syntax: `let func = (arg1, arg2, .., argN) => expression;`
	- This creates a function `func` that accepts argument `arg1..argN` then evaluates the `expression` and return a result

```javascript
//that is equivalent to
let func = function(arg1, arg2, ..., argN){
    return expression;
};

//concrete example
let sum = function(a, b){
    return a + b;
};

//equivalence
let sum = (a, b) => a + b;

//call the function
alert(sum(2, 4));

//arrow function with only one parameter, () can be omitted
let double = n => n * 2;

alert(double(10));

//arrow function with no arguments
let sayHi = () => alert("Hello!");
sayHi();

let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
    () => alert('Hello'):
	() => alert("Greetings!");

welcome();
```

- Multiline arrow functions: 

```javascript
let sum = (a, b) => {
    let result = a + b;
    return result;
};

alert(sum(1, 2));
```

---

## JavaScript Call Stack

- JS engine uses a **call stack** to manage execution contexts: the Global Execution Context and Function Execution Contexts.
- The call stack works based on the LIFO principle, **last-in-first-out**
- When a script is executed, the JS engine creates a Global Execution Context and pushes it on top of the call stack
- When a function is called, the JS engine creates a Function Execution Context for the function and pushes it on top of the Call Stack, and starts executing the function.
- When a function calls another function, the JS engine creates a new Function Execution Context for the function called and pushes it on top of the call stack.
- When the current function completes, the JS engine pops it off the call stack and resumes the execution where it left off in the last code listing.
- Script will strop when the call stack is empty.
- Global execution context is denoted by `main()` or `global()`

```javascript
function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);
```

![Screen Shot 2021-11-24 at 1.10.04 PM](/Users/flaviaouyang/Library/Application Support/typora-user-images/Screen Shot 2021-11-24 at 1.10.04 PM.png)

## Stack Overflow

- The call stack has a fixed size, depending on the implementation of the host environment, either the web browser or Node.js
- If the number of the execution contexts exceeds the size of the stack, a stack overflow will occur.

```javascript
function foo(){
    foo();
}

foo(); // stack overflow
```

## Asynchronous JavaScript

- JavaScript is the single-threaded programming language. The JS engine has only one call stack so that it only can do one thing at a time.
- When executing a script, the JS engine executes code from top to bottom, line by line. In other words, it is **synchronous**.

---

## Understanding Errors

- `ReferenceError` when one refers to a variable that is not declared and/or initialized within the current scope.
- `SyntaxError` when code is not written correctly
- `TypeError` when
	- an operand or argument passed to a function is incompatible with the type expected by that opeartor or function
	- attempting to modify a value that cannot be changed
	- attempting to use a value in an inappropriate way

---

## Clean Code

- Indentation
- Semicolons: they are mostly optional in JS because the compile will automatically insert them if omitted. But it is a better practice to add them.
- Line length
- Name things: use camelCase
- Practice:
	1. revise your logic before coding
	2. clearing expose the strucuture of the page
	3. use correct indentation
	4. write explanatory comments
	5. avoid abusing comments
	6. avoid huge function
	7. use naming standard for functions and variables
	8. summarize imports

---

## Arrays

- An array is a special variable that can hold more than one value

```javascript
const cars = ["Saab", "Volvo", "BMW"];
```

- To create an array: `const array_name = [item1, item2, ...]`
	- it is common practice to declare arrays with `const` keyword
- Spaces and line breaks are not important, but acceptable

```javascript
const cars = [
    "Saab",
    "Volvo",
    "BMW"
];
```

- You can also create an array, then provide the elements

```javascript
const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
```

- Using the key word `new`
	- `const cars = new Array("Saab", "Volvo", "BMW");`
	- the is the exact same as the other way
- Access an element with **index number**
- Change an Array Element

```javascript
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
cars[0] = "Opel";
```

- Access the full array: refer to the array name

```javascript
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTMl = cars;
```

- Arrays are objects
	- Objects use names to access its members

```javascript
const person = {firstName:"John", lastName:"Doe", age:46};
console.log(person.firstName);
// John
```

- Array elements can be objects: 
	- you can have functions in an array 
	- or another array in an array
- Array properties and methods
	- `cars.length //returns number of length`
	- `cars.sort() //sort the array`
- Looping array elements
	- use `Array.forEach()`
- Adding array elements: `push()`
- Difference between Arrays and Objects
	- array use **numbered indexes**
	- objects use **named indexes**

## Array Methods

- `toString()` converts an array to a string of (comma separated) array values

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString();
```

- `join()`: joins all array elements into a string, much like `toString()` but you can specify the separator.

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join(' * ');
```

- `pop()` removes the last element from an array
	- returns the value that was removed
- `push()` addes a new element to an array at the end
	- Returns the new array length
- `shift()` equivalent to popping but removes the first element instead of last
	- returns the values that was removed
- `unshift()` adds a new element to an array at the beginning
	- returns the new array length
- `delete` operator can delete array elements but it will leave an `undefined` holes in the array

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
```

- `splice()` can remove or replace existing elements
	- first parameter defines the index where new element(s) should be added
	- second parameter defines **how many** elements should be **removed** starting from the beginning
	- rest of parameters defines the new elements to be added
	- returns an array with the deleted items

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
```

- `concat()` creates a new array by merging existing arrays
	- `const array = array1.concat(array2, array3, array4, ..., arrayN);`
- `slice()` slice out a piece of an array into a new array
	- it creates a new array
	- `slice(n)` slices out an array starting from index n
	- `slice(n, m)` slice out from array[n] to array[m-1]

## Looping 

- **for loop**

```javascript
for (initializer; condition; final-expression) {
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

- `...` allows an iterable such as an array expression or string to be expanded in places where zero or more arguments  or elements are expected, or an object expression to be expanded in places where zero or more key-value pairs are expected.

---

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
	- Looks like array, acts like array but is *nodelist*

## Element creation

- `document.createElement(tagName, [options])` creates a new element of tag type tagName. `[options]` means you can add optional parameters

```js
const div = document.createElement('div');
```

## Append Elements

- `parentNode.appendChild(childNode)` appends `childNode` as the last child of `parentNode`
- `parentNode.insertBefore(newnode, referenceNode)` inserts `newNode` into `parentNode` before `referenceNode`

## Remove Elements

- `parentNode.removeChild(child)` removes `child` from `parentNode` on the DOM and returns reference to `child`






















































































