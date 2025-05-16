## DOM Selectors

This README provides a brief overview of the most common DOM selectors, example code snippets, and resources for further learning.


### `document.getElementById(id)`
Selects an element by its unique ID.
```javascript
let element = document.getElementById("myId"); and replace the myId with #ID element
```
### `document.getElementsByClassName(className)`
Select elements (array of elements) using their class name
```javascript
let elements = elemenet.getElementsByClassName("className");
```

### `document.getElementsByTagName(tagName)`
Select elements with a specific tag name
```javascript
document.getElementsByTagName("div");
```
NB: note that in this example or other one's when we have Element(s) as plural it return an array of items that match 
the tag name, even if there only one item in the document that match that get it return it in an array
### `document.querySelector(selector)`
Select the first element that match the css selector (css selector like .h1 .div)
```javascript
document.querySelector(".selector");
```

### `document.querySelectorAll(selector)`
Select all the elements that match the css selector (css selector like .h1 .div)
```javascript
document.querySelectorAll(".selector");
```

