# Arrays

- An array is a special variable that can hold more than one value

```javascript
const cars = ["Saab", "Volvo", "BMW"];
```

- To create an array: `const array_name = [item1, item2, ...]`
  - it is common practice to declare arrays with `const` keyword
- Spaces and line breaks are not important, but acceptable

```javascript
const cars = ["Saab", "Volvo", "BMW"];
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
const person = { firstName: "John", lastName: "Doe", age: 46 };
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

## Methods

- `toString()` converts an array to a string of (comma separated) array values

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString();
```

- `join()`: joins all array elements into a string, much like `toString()` but you can specify the separator.

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join(" * ");
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
