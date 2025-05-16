
### Separation of Concerns (SoC)

When coding, it's important to maintain a clean and manageable codebase. The Separation of Concerns (SoC) principle helps achieve this by dividing code into distinct sections based on their responsibilities. 
This approach simplifies debugging and improves code readability:

*HTML:* Focuses on the content structure.
*CSS:* Handles the presentation and styling.
*JavaScript:* Manages the behavior and interactions.
## Dynamic Style Changes
To modify styles dynamically, you can use the classList property available on any DOM object. 
The `classList` property provides a list of the classes currently applied to an element. You can use it to `add`, `remove`, or `toggle` classes.

For example:

- To get the list of classes applied to a button:

```javascript
document.querySelector("button").classList;
```

- To add a new class to the button:

```javascript
document.querySelector("button").classList.add("invisible");
```

This will add the class `invisible` to the button element.

