# Basic JavaScript

## Boolean

- two values: `true` or `false`
	- never written with quotes

## Conditonal logic

```js
if (condition is true) {
    statement is executed;
}
```

- equality operator: `= =`
	- Typecase string and number automatically
- strict equality operator: `= = =`
- inequality operator: `! =`
- strict inequality operator: `! = =`
- `&&` and
- `||` or

## Switch statements

- `switch` statement tests a value and can have many *case* statements which define various possible values. Statements are executed from the first matched `case` value until a `break` is encountered.

```js
switch (lowercaseLetter) {
    case "a":
        console.log("A");
        break;
    case "b":
        console.log("B");
        break;
}

switch(val) {
    case 1:
        answer = "alpha";
        break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
}
```

- `case` values are tested with strict equality (`= = =`)
- `break` tells JS to stop executing statements.
- If `break` is omitted, the next statement will be executed.
- **default option**: add `default` statement which will be executed if no matching `case` statements are found

```js
switch(num) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    default:
        defaultStatement;
        break;
}
```

- **multiple identical options**

```js
switch(val) {
    case 1:
    case 2:
    case 3:
        result = "1, 2, or 3";
        break;
    case 4:
        result = "4 alone";
}
```

- **replace `if else` chains with `switch`**

```js
if (val === 1) {
    answer = "a";
} else if (val === 2) {
    answer = "b";
} else {
    answer = "c";
}

switch(val) {
    case 1:
        answer = "a";
        break;
    case 2:
        answer = "b";
        break;
    default:
        answer = "c";
        break;
}
```

## Objects

- **Objects** are similar to **arrays** except that instead of using indexes to access and modify their data, you access the data in objects through `properties`
- Objects are useful for storing data in a structured way, and can represent real world objects

```js
const cat = {
    "name": "whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
};
```

- **access object properties with dot notation**:
	- two ways to access the properties of an object
		1. dot notation: `.`
		2. bracket notation: `[]`

```js
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
  "cool": "very"
};

const coolValue = testObj.cool;
const entreeValue = testObj["an entree"]; 
```

- access Object Properties with Variables **use bracket notation, not dot notation**

```js
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};
 const myDog = "Hunter";
 const myBreed = dogs[myDog];
 console.log(myBreed);
```

- **Update object properties**

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";
//or
ourDog["name"] = "Happy Camper";
```

- **Add new properties** to a JavaScript Object

```js
ourDog.bark = "bow-wow";
//or
ourDog["bark"] = "bow-wow";
```

- **Delete properties** from a JavaScript Object

```js
delete ourDOg.bark;
```

- **Check if properties exist in object**

```js
const myObj = {
    top: "hat",
    bottom: "pants"
};
myObj.hasOwnProperty("top");
// return true
myObj.hasOwnProperty("middle");
// return false
```

- **Manipulating Complex Objects**
	- [JavaScript Object Notation](https://www.json.org/json-en.html) or `JSON` is a related data interchange format used to store data.

```js
const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];

// this is an array that contains an object
// the object has various pieces of metadata about an album
// it has a formats array
```

- **Accessing Nested Objects**:

```js
const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2; //secret
ourStorage.desk.drawer; //stapler
```

- **Accessing Nested Arrays**:

```js
const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1]; //fluffy
ourPets[1].names[0]; // spot
```

## While Loops

```js
let i = 0;
while (i < 10) {
	console.log(i);
	i++;
}
```

## For loops

```js
// for(a; b; c)
// a is the initialization statement
// b is the condition statement
// c is the final expression

for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

## Do...While loops

- Execute `do` code no matter what, then continue to run the loop `while` the specified condition evaluates to `true`

```js
const ourArray = [];
let i = 0;
do {
    ourArray.push(i);
    i++;
} while (i < 5);
```

## Recursion

- **recursion** is the concept that a function can be expressed in terms of itself.

## Random

- `Math.random()` generates a random decimal number between `0` (inclusive) and `1`(exclusive)
- **Generate whole number**: `Math.floor(Math.random * num)`
- **Generate whole number within a range**: `Math.floor(Math.random() * (max-min+1)) + min`

## Cast String into Integer

- `parseInt()` function parses a string and returns an integer

```js
const a = parseInt("007");
```

- `parseInt()` takes a second argument for radix which specifies the base of the number in the string
	- `radix` can be an integer between **2 and 36**.
	- `parseInt(string, radix);`

## Use COnditional (Ternary) Operator

- `a ? b : c` where `a` is the condition, `b` is the code to run when the condition is `true`, and `c` is the code to run when the condition return `false`

```js
function findGreater (a, b) {
    if (a > b) {
        return "a is greater";
    } else {
        return "b is greater or equal";
    }
}

// use ternary operator
function findGreater (a, b) {
    return a > b ? "a is greater" : "b is greater";
}
```

- **Multiple ternary operators**

```js
function findGreaterOrEqual (a, b) {
    return (a > b) ? "Greater"
    	: (a === b) ? "Equal"
    	: "smaller";
}
```



