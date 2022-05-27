# Event Handling in React

```js
const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>plus</button>
    </div>
  );
};
```

- We set the value of the button's `onClick` attribute to be a reference to the `handleClick` function defined.
- It can also be written like this:

```js
const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => console.log("clicked")}>plus</button>
    </div>
  );
};
```

- Note that event handler is a function.
