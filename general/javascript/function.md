# Function

## Declaration and Expression

- this is called **Function Declaration**

```javascript
function sayHi() {
  alert("Hello");
}
```

- This is called a **Function Expression**

```javascript
let sayHi = function () {
  alert("Hello");
};
```

- We can print out the value of `sayHi` and it will show the function code
- A function expression is created the execution reaches it and is usable only from that moment
  - **A function declaration can be called earlier than it is defined**
- When a Function declaration is within a code block, it's visible everywhere inside that block but not outside of it.
  - to combat this, we can use function expression and assign it to a variable that is declared outside of the code block.

## Default values

- We can specify the so-called _default_ value for a parameter in the function declaration using `=`:
  - default can also be another function

```javascript
function showMessage(from, text = "no text given") {
  alert(from + ": " + text);
}

showMessage("Ann");
//output: Ann: no text given
```

- **Alternative default parameters**: we can also assign default values for parameters in the function

```javascript
//check if the parameter is passed during the function execution by comparing it with undefined
function showMessage(text) {
  //...

  if (text === undefined) {
    text = "empty message";
  }
  alert(text);
}
showMessage();

//or we can use ||
function showMessage(text) {
  //...

  text = text || "empty";
  alert(text);
}
showMessage();

//or use the nullish coalescing operator ??
function showCount(count) {
  //if count is undefined or null, show unknown
  alert(count ?? "unknown");
}
showCount();
showCount(null);
```

## Return values

- Functions without return values, their return value is `void` or `undefined`
- `return;` without a value will cause the function to exit immediately and return `undefined`
- never add a newline between `return` and the value

## Anonymous functions

```javascript
//you can create a function that doesn't have a name

function(){
    alert('hello');
}

myButton.onclick = function() {
    alert('hello');
}
```

- An **anonymous function** won't do anything on its own. Generally you use an anonymous function along with an event handler.
- You can also **assign an anonymous function to be the value of a variable**.

```javascript
const myGreeting = function () {
  alert("hello");
};
myGreeting();
// you can assign the function to be the value of multiple variables
let anotherGreeting = myGreeting;
```

## Callback functions

- passing functions as values and using function expressions

```javascript
//write a function ask(question, yes, no)
//question: text of the question
//yes: functions to run if yes
//no, functions to run if no

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}

ask("Do you agree?", showOk, showCancel);
```

- The arguments `showOk`, `showCancel` are called **callback functions** or just **callbacks**.
- We can use function expression to write the same function but much shorter.

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled the execution.");
  }
);
```

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
