# Add react to a website

## Step 1: Add a DOM container to the HTML

1. add `div` tage to mark when React is to be added
2. give the `div` tag a unique id

## Step 2: Add the Script Tags

1. add three `script` tags to the HTML page before the closing `</body>` tag

```html
<body>
  <!-- ... other HTML ... -->

  <!-- Load React. -->
  <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
  <script
    src="https://unpkg.com/react@18/umd/react.development.js"
    crossorigin
  ></script>
  <script
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    crossorigin
  ></script>

  <!-- Load our React component. -->
  <script src="like_button.js"></script>
</body>
```

## Step 3: Create a React Component

1. create a js file
2. Add your react code
