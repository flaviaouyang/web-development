# Eloquent JavaScript

---

## Chapter 1: Values, Types, and Operators

- **backtick-quoted** strings usually called *template literals* 

```javascript
`half of 100 is ${100/2}`
```

- When you write something inside `${}` in a template literal, its result will be computed, converted to a string, and included at that position.
- **ternary opeator**: `true ? 1 : 2`

## Chapter 2: Program structure

- *expression* -> *bindings*

## Chapter 3: Functions

- **arrow functions**

```javascript
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

// one parameter. () can be omitted
const sqaure = x => { return x * x; };
//or 
const square = x => x * x;
```

- **The call stack**: every time a function is called, the current context is stored on top of this stack. when a function returns, it removes the top context from the stack and uses that context to continue execution.

	- When the stack grows too big, the computer will fail with a message "out of stack space"

- **optional argument**: JS ignores extra arguments passed, and assign `undefined` to missing parameters

	- if you write `=` after a parameter, the value of the expression will replace the argument when it is not given.

	```javascript
	function power (base, exponent = 1) {
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

- **Closure**: being able to reference a specific instance of a local binding in an enclosing scope is called *closure*

	```javascript
	function multiplier (factor) {
	    return number => number * factor;
	}
	let twice = multiplier(2);
	console.log(twice(5));
	// 10
	```

```javascript
function wrapValue(n) {
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(1);
console.log(wrap1());
// 1
```

- **recursion**: a function that calls itself is called *recursive*
