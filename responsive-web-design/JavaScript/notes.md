# Introduction to JavaScript

## Responding to mouse clicks

* An **event** is something that JavaScript can respond to.

```html
<h1 id="title" onclick="alert('hello');">Hello</h1>
```

## Manipulating HTML elements

- JQuery

  ```javascript
  $('#title').html('Goodbye');
  Script Tag
  ```

## Script Tag

```html
<body>
  <h1 onclick="sayHello();">
    Hello
  </h1>
</body>

<script type="text/javascript">
	function sayHello(){
    alert('hello');
  };
</script>
```

## Anonymous functions

```javascript
function sayGoodbye(){
	$("#title").html("Goodbye");
	$("#title").click(function(){
		$("#title").html("Hello");
		$("#title").off("click");
	});
}
```



