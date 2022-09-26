# Sep-23, 2022

# Contd. of Axios
- Axios is better than fetch because:
  - We don't need to convert to JSON explicitly. Axios will automatically do that for us.
  - If we have multiple network requests for the same backend, we can put the common part in one single object so that we don't have to write it multiple times.
  - Only 1 .then promise is needed to be handled.


## Contd. on GitFind
- Implementation of the Search functionality.
- Implement the Repository List.
- Completed the Detail Component showing of data part.
- Started with CSS
- Color Palette - https://coolors.co/palette/ffffff-00171f-003459-007ea7-00a8e8


## useRef hook
- This hook is part of React.
- This hook is an alternate to document.getBlahBlah.
- We NEVER directly access the DOM.
- We ALWAYS access the Virtual DOM.
- We techhnically CAN access the DOM directly. However, react will not be able to detect that we have accessed the DOM.
- React asks us to NOT access directly, instead use the React Provided methods. This is helpful because then React can track what changes we are doing. That tracking is important for re-rendering optimizations.
- Usage:
  - Import the useRef hook from react. This is a named export.
  - Create a reference object by running `const abcdRef = useRef();`.
  - Connect this to the DOM element by giving a ref attribute to that element. `<p ref={abcdRef}></p>`.
  - In order to access the DOM element, we need to ues the variable's current property. `abcdRef.current`. We need this because in React, it is possible to have a reference of stale state. But we want (99% of the times) the current state's reference.
  - After this, we can access the element as usual. Properties like innerHTML, appendChild, style, value, click(), addEventListener().
- It is a very powerful hook, so we should be careful with that and not use it everywhere.

## Event
- These are actions that happen on a website.
- These are objects which contain certain things related to that event that has taken place.
- When we use any event listner in React way, in the function we will get the event as it's first parameter.

## event.preventDefault()
- Some of the events have certain actions associated with it.
- Common example of forms, when we submit the form, browser triggers an action to redirect the page to the server.
- Most of the times, we want to stop that default thing from happening, therefore we use the event object's preventDefault() method.
- preventDefault will prevent the default action from happening for that particular event.
- This is used when we customize the functionality/logic and we do not want the default functionality/logic to happen.
- This is part of Vanilla JS.


## State Lifting / Lifting State Up
- Sending data from parent to child component is easy, very easy. By using props.
- However, sending the data from a child component to parent component is not so easy. We need to implement a little trick here.
- Approach:
  - In the parent component, we create a function.
  - We pass that function as prop to the child component. (That is possible because JS supports First Class Functions).
  - From the child component, we invoke that function and send the actual data in the agruments.
  - Now, the function will be executed, but the function definition is written in the parent component. Therefore the data that we sent is now accessible in the parent component.
  - We can then do whatever we want with that data and handle accordingly.
  - At end of the day, we achieved sending of data from a child component to parent component.
- This is known as State Lifting / Lifting State Up
- There are alternatives to this, such as Redux and Context API. But this is comparatively a very starightforward approach.


**Note: If you give target="_blank" to any anchor tag. MAKE SURE to give rel="noreferrer", otherwise Reatc will give warning and with warning we will not be able to host online.**


## Further Reading for CSS
- https://cssbattle.dev/
- https://flexboxfroggy.com/
- https://cssgridgarden.com/
- https://flukeout.github.io/

