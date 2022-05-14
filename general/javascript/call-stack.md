# Call Stack

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

## Stack Overflow

- The call stack has a fixed size, depending on the implementation of the host environment, either the web browser or Node.js
- If the number of the execution contexts exceeds the size of the stack, a stack overflow will occur.

```javascript
function foo() {
  foo();
}

foo(); // stack overflow
```
