### Text Manipulation

There is a slight difference between the following:

- Using `innerHTML`:
  ```javascript
  document.querySelector("h1").innerHTML = "Goodbye";

This property returns or sets the HTML markup contained within the h1 element. For example, if the innerHTML of an element is:

`<h1 id="title"> <strong>Hello</strong> </h1>`

Then document.querySelector("h1").innerHTML will return:

 `<strong>Hello</strong> `

- Using `textContent`:
```javascript
document.querySelector("h1").textContent = "Good bye"; 
```

This property returns or sets the text content of the specified node and all its descendants. 
It only affects the text inside the `h1` element, ignoring any HTML tags it might contain. 
Therefore, it changes the text inside the `h1` element to "Goodbye" without affecting any nested tags.
