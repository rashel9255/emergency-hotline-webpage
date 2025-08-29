# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: `getElementById()`: With `getElementById()` we can select a element based on its id. as id is unique if we use same id for multiple element `getElementById()` will return only first one.

`getElementsByClassName()`: By `getElementsByClassName()` we can select multiple element with the same class name. it returns a htmlcollection. it is like an array like object.

`querySelector()`: By `querySelector()` we can select an element with a css selector. we can use any css selector like id, class, child selector,tag name, attribute name etc. it returns only the first element

`querySelectorAll()`: it is like `querySelector()` but it returns all the elements which can be entire document or a particular element that matches the provided css selector.

# 2. How do you create and insert a new element into the DOM?

Answer: we can create and insert a new element into the DOM with some steps. 

step-1: Create the element: we can create a new element with `createElement()`.such as
```js
const Div = document.createElement("div");
```
step-2: Add content inside it: Then we have to add content (HTML or text) in this new created element with `.innerText` or `.innerHTML`. such as
```html
Div.innerText = "Hello, I am a new div!";
Div.innerHTML = "<strong>Hello</strong>, I am a new div!";
```
step-3: Find the parent element where we want to insert it: then we have to find the parent. such as
```js
const parent = document.getElementById("container");
```
step-4: Insert the new element into the DOM: at last we have to insert the new element into the parent with `appendChild()`
```js
parent.appendChild(Div);
```
# 3. What is Event Bubbling and how does it work?

Answer: Event bubbling means that when an event happens on a DOM element it starts at the target element and then bubbles up (propagates) through its ancestors (parent, grandparent, etc.) all the way up to the document.

suppose we have a code like below:
```html
<html>
<body>
<div id="parent">
  <button id="child">Click Me</button>
</div>
<script>
    document.getElementById("child").addEventListener("click",function() {
        console.log("Child clicked");
})
    document.getElementById("parent").addEventListener("click", function() {
        console.log("Parent clicked");
})
    document.body.addEventListener("click", function() {
        console.log("Body clicked");
})
</script>
</body>
</html>
```
when we click on the button we will see in the console that

`Child clicked`
`Parent clicked`
`Body clicked`

And this is event bubbling.

# 4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation is a JavaScript technique where instead of attaching event listeners to many child elements individually, we attach a single event listener to their parent.
That parent listens for events bubbling up from its children, and then you check which child triggered it.

As we use a few event listners so it usage less memory and the code run fast. and the code looks clean

# 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

Answer: By `preventDefault()` we can prevent default behaviour of a element.and by `stopPropagation()` we can stop bubbling up
