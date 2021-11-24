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































































































