## Key Concepts Learned in This Lesson:

- **DOM (Document Object Model)**: The browser converts an HTML document into a structured format known as the DOM, which represents the page as objects. This structure allows for manipulation and selection of elements.
- **Browser's Role**: The browser is responsible for converting the HTML file into the DOM.
- **DOM Manipulation and Selection**: Elements within the DOM can be accessed and manipulated using concepts such as descendants, ascendants, and siblings.
- **Properties and Methods**: Objects in the DOM can have properties and methods:
  - **Properties**: Attributes that describe something about the object, such as color, size, or width. For example:
    ```javascript
    // Getter: Assume the car's color is red
    let color = car.color; // Returns "red"
    // Setter
    car.numberOfDoors = 4;
    ```
  - **Methods**: Behavioral aspects or actions that objects can perform. Methods are invoked using parentheses. For example:
    ```javascript
    car.startEngine();
    ```
- **Distinction Between Properties and Methods**: A property is accessed without parentheses (e.g., `car.color`), while a method requires parentheses (e.g., `car.startEngine()`).

## Tools Used in This Module:

- [HTML Tree Generator](https://chromewebstore.google.com/detail/dlbbmhhaadfnbbdnjalilhdakfmiffeg): This tool allows visualization of the browser's process of converting HTML code into a DOM tree.
