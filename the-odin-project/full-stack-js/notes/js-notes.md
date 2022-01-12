# JavaScript

---

## Objects and Object constructors

- define objects with **object literal** syntax:

```js
const myObject = {
  	property: "value",
    otherProperty: 77,
    "function property": function(){
        //dp stuff
    }
};
```

- getting information
	1. dot notation: `myObject.property` //value
	2. bracket notation: `myObject["function property"]` //function

## Objects as a Design Pattern

- Group things into objects to organize 

```js
const playerOne = {
    name: "tim",
    marker: "X"
};

const playTwo = {
    name: "jenn",
    marker: "O"
};
```

- **Object constructors**: duplicate a specific type of object

```js
function Player (name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(name);
    }
}

//call the function with keyword new
const player = new Player('steve', 'X');
console.log(player.name) // 'steve'
player.sayName(); //'steve'
```

## Protoype

- All objects in JS have a prototype which is another object that the original object inherits from
	- The original object has access to all of its prototype's methods and properties
- Every JavaScript function has a **prototype property** which is empty by default
	- You can attach properties and methods on this prototype property when you want to implement inheritance
	- prototype property is not enumerable meaning that it is accessible in a for/in loop

- Prototypes have prototype attributes: they are like characteristics of the object
	- An object's prototype attribute points to the object's parent -- the object it inherites its properties from
	- It is formally referred to as the prototype object
	- it is set automatically when you create a new object

- 

