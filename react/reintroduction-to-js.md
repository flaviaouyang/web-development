# A re-introduction to JavaScript

Unlike most programming languages, the JavaScript language has no concept of input or output. It is designed to run as a scripting language in a host environment.

Some common host environments are:

- the browser
- server-side environment: `node.js`

## Overview

JavaScript is a multi-paradigm, dynamic language. JavaScript supports object-oriented programming and functional programming.

Types include:

1. Number
2. BigInt
3. String
4. Boolean
5. Object
   1. Function
   2. Array
   3. Date
   4. RegExp
6. Symbol
7. `undefined` and `null`

## Numbers

- Two built-in numeric types: Number and BigInt
- Note: _integers_ here is a representation of an integer using a Number value. Therefore, things like this can happen:

```js
console.log(3 / 2);
// output: 1.5
```

- All standard arithmetic operators are supported.
- To convert a string to an integer, use `parseInt(number, base)` function. It is a good practice to provide the base for conversion as an optional second argument.
  - `NaN` is returned is the string is non-numeric.
  - `NaN` will also cause the result of any operation to be `NaN`
  - To check for `NaN` use `Number.isNaN(number)`
- `Infinity` and `-Infinity` are special values
  - test for them using `isFinite()` function

## Strings

- JS strings are sequences of unicode characters.
- Some methods:

```js
// access length
string.length;

// find char
string.charAt(index);

// modify
string.replace("word1", "word2");
string.toUpperCase();
```

## Other types

- `null` in JavaScript is a value that indicates a deliberate non-value
- `undefined` indicates an uninitialized variable
- Boolean:
  - `true`
  - `false`: 0, `""`, `NaN`, `null` and `undefined` will all evaluate to `false`

## Operators

- `==` and `===`:
  - `==` does not enforce type equality
  - `===` avoids type coercion

## Control structures

- `do..while` loop:

```js
// the body of the loop is executed at least once
// regardless of the condition evaluation
do {
  input = get_input();
} while (inputIsNotValid(input));
```

- `for` loop:

```js
// loop through array elements
for (let value of array) {
}

// loop through array indices
for (let properties in object) {
}

array.forEach(function () {
  // do something
});
```

## Anonymous Functions

- Anonymous functions are function without names. They are typically used as arguments to other funcitons or are made callable by immediately assigning them to a variable that can be used to invoke the function

```js
let avg = function () {
  let sum = 0;
  for (const item of arguments) {
    sum += item;
  }
  return sum / arguments.length;
};
```

- IIFE(Immediately invoked function expressions):

```js
(function () {
  // …
})();
```
