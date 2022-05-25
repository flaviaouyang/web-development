# Introduction to React

## Getting Started

- [`create-react-app`](https://github.com/facebook/create-react-app)

```bash
npx create-react-app name
cd name
```

## Component

```js
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

- This line renders its content into a `div` element, defined in the `index.html` with the id value of `root`.

## JSX

- The layout of React components is written using JSX.
- JSX is _XML-like_ meaning that every tag needs to be closed.

## Multiple components

```js
const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
};
```

## `props`: passing data to components

```js
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" />
      <Hello name={name} />
    </div>
  );
};
```
