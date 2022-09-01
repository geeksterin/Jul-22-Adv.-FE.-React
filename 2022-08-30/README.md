# Aug-30, 2022

## Component - Recap
- It is a reusable class/function which contains the JSX.
- JSX -> JavaScript + XML
- The HTML elements alsong with it's relevant JavaScript.
- DOM elements along with it's relevant logic and functionality.
- One file can have multiple classes/function, therefore it can have multiple components.
- A component can return the JSX.
- It can be wrapped using ().
- In any case, return should start in the same line. Either the html tag should be next to the return keyword or the wrapper's ( is next to the return keyword in the same line.
- Components have to be exported. Commonly, we use default export because (1 file, 1 component, 1 default).
- Typically to maintain cleaner code structure. We create a directory called as components inside the src.
- Inside components we put all the various components that we will be using.
- The Component name should follow PascalCasing. Otherwise it will not work.

## Props
- This is short for properties.
- Props means sending of data from 1 component to another.
- Typically is is Parent to child.
- Instead of MyComponent({caption: "Button 1"}) -> <MyComponent caption="Button 1" /> 
- In the Parent, we send as an attribute. (Because in the parent, we write HTML like syntax and in HTML, the way we send any data to the element is using attributes).
- In the child component. For functional component, we can get the prop directly as the function's parameter.
- Here, the parameter will be an object. This object will contain all the attributes that we are sending for that component.
- The Props only flows from parent to Child Component.
- The prop data can be anything, primitive data type, non primitive data type, even functional references.

### Parent and Child
- This is similar to the Parent child relations of the DOM tree.
- Here, in react, the App component is the root.
- Any component which is importing other components is called the Parent.
- The component which is getting imported and being used is called the Child Component.

**App.JS is the first COMPONENT that gets rendered, index.JS is just a file.**

- It is possible that even we write console once, but it shows twice. That is because react will do pre-processing to check for errors and optimizations. We can fix that by going to index.js and removing <React.StrictMode> opening and closing tgs.


## Styling
- We use this to give better looks and design to our page.
- We can change any look and feel, from a simple text color to a complicated animation.
- This also is used to make website responsive.
- We should be able to do this in React apps as well.
- There are many ways to attach styling.
  - External CSS -> Using index.css
  - Index.css is imported at index.js level, therefore it is available pretty much everywhere.
- In React, we don't use class attribute. Instead, we use className.
  - Modular CSS -> For every module, we will have a css.
  - The idea is better code organization.
  - For each module, we will have it's relevant css file.
  - This keep the code files organized and structured.
  - Instead of having 1 very large file, we have more files but smaller in size comparatively.
  - There is no security advantage, it will be applied everwhere. It's just for better code management and maintenance.
- Third Approach: Inline styling.
  - In the same like we give the style attribute.
  - This attribute is actually an object.
  - Here, we use camelCasing for the property. Instead of typically using kebab case for properties in the CSS file.
  - We can directly write the style inline or use a variable. (Depends on the readability factor).


**Note: When giving CSS classes based styling. DO NOT use class attribute, instead, use className attribute.**

## Assignment:
- Create a React application.
- In that, create a component called as colorBox.
- Reuse that component 4-5 times.
- Every time, pass a unique color as a prop.
- Change the color of that colorbox div into whatever is passed as prop.