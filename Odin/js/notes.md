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

- 