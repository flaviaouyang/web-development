# React

---

## Try React

1. Add a DOM container to HTML: 
	- add an empty `<div>` tag to mark the spot where you want to display something with React
	- give the `div` a unique **id** attribute
2. Add `script` tags:

```html
<!-- Load React. -->
  <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
  <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>

  <!-- Load our React component. -->
  <script src="like_button.js"></script>
```

3. Create a react Component:
	- create a file called `like_button.js`