# Component state

## Component helper Functions

```js
const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};
```

## Destructuring

- ES6 allows us to destructure values from objects and arrays upon assignment

```js
const Hello = (props) => {
  const { name, age } = props;
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};
```

```js
const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};
```

## Page re-rendering

```js
const App = (props) => {
  const { counter } = props;
  return <div>{counter}</div>;
};

export default App;
```

```js
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

let counter = 1;

const refresh = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <App counter={counter} />
  );
};

setInterval(() => {
  refresh();
  counter += 1;
}, 1000);
```

- repeating calls to `render` method is not recommended

## Stateful component

```js
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(() => setCounter(counter + 1), 1000);

  return <div>{counter}</div>;
};

export default App;
```

```js
const [counter, setCounter] = useState;
```

- The function call adds state to the component and renders it initialized with the value of zero.
- It returns an array that contains two items
  - which we assigned to `counter` and `setCounter`
  - `counter` is assigned the initial value of state, 0.
  - `setCounter` is assigned to a function that will be used to modify the state
- When the state modifying function `setCounter` is called, React re-renders the component. This means that the function body of the component function gets re-executed.
