1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer:: 

getElementById() used to perform a specific action on a single, unique element by its ID.

getElementsByClassName() used to select multiple elements that share the same class and apply changes to them.

querySelector()  used to locate the first matching element based on a CSS selector.

querySelectorAll() used to select all elements that match a CSS selector and loop through them.


2. How do you **create and insert a new element into the DOM**?

Answer:: 

We can create a new element in the DOM using document.createElement("tagName"), then set its text, class, or attributes. After that we can insert it into the page using appendChild() to place it inside a parent element.

3. What is **Event Bubbling** and how does it work?

Answer::

Event bubbling is where an event starts at the target element and then travels upwards through its parent elements in the DOM hierarchy.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer::

Event delegation is a technique where a parent element handles events for its children using a single event listener. It works through event bubbling, and it is useful for better performance and managing dynamic elements.


5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer::

The preventDefault() method is used to stop the browser’s default behavior for an event, such as preventing a form submission or a link from navigating. On the other hand, stopPropagation() is used to stop the event from bubbling or capturing further through the DOM hierarchy.