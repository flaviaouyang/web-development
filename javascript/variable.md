# Variables

- create a variable: `var foo`, `let moo`, `const poo!`

```javascript
let message; //create a variable using let
message = "Hello"; //store the string 'Hello' in variable message

alert(message); //show the variable content

let user = "John",
  age = 25,
  message = "Hello";
//create multiple variables in one line (not recommended)
```

- In older scripts, people use `var` instead of `let`.
- Declaring twice will trigger a `SyntaxError`
- Variable naming:
  - Contain only letters, digits, `$` and `_`
  - first character cannot be a digit
  - *camelCase*is commonly used
  - JS is case sensitive
  - no reserved names like `break`, `case`, `catch`, etc

## Constants

- Declare a constant (unchanging) variable with `const`
  - constants cannot be reassigned
  - constants are named using CAPITAL_LETTERS and UNDERSCORES
    - only Upper case for constants that are **hard-corded**

```javascript
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
```

## Data Types

- There are 8 basic data types in JS. We can put any type in a variable. JS is **dynamically typed** meaning that variables are not bound to any data types.

## Numbers

- The *number* type represents both integer and floating point numbers.
- There are also *special numeric values*

  - `Infinity`
  - `-Infinity`
  - `NaN`: represents a computational error. Any further operation on `NaN` returns `NaN`

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

## BigInt

- `Number` type cannot be larger than `2^53-1` or less than `-2^53+1`
- `BigInt` is created by appending `n` to the end of an integer
  - `const EARTH = 829179821792719823918739872981293183191819n;`

## String

- A string in JS must be surrounded by quotes

```javascript
let str = "hello";
let str2 = "single quote is also okay";
let phrase = `can embed another ${str}`;
```

- There are 3 types of quotes:
  - double quote: `"Hello"`
  - single quote: `'hello'`
  - Backsticks: `` (extended functionality quotes)
    - use them to embed variables and expressions into a string by wrapping them in `${...}`

```javascript
let name = "John";
alert(`Hello, ${name}`);
alert(`the result is ${1 + 2}`);
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
let text3 = text1.concat(" ", text2);

let whiteSpace = "    hello.     ";
let noWhitespace = whiteSpace.trim;

let a = "5";
let aPadded = a.padStart(4, 0);
//output: 0005

text.split(","); //spilt on commas
```

## Boolean

- Boolean has only two values: `true` and `false`
- `let isCool = true;`

## The `null` value

- the special `null` value does not belong to any of the types described above
- `null` represents nothing, empty or value unknown

## The `undefined` value

- `undefined` represents "value is not assigned"
