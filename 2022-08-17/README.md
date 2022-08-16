# Aug-17, 2022


- JS is not controlled by 1 company.
- Each organization can create their own JS Engine.
- Google -> V8 engine
- Mozilla -> Spidermonkey
- Microsoft -> Chakra ❌


## ECMA
- It is a non profit organization.
- European Computer Manufacturers Association.
- This Technical Committee (TC39) meets about every year/year-and-a-half and discuss the most voted requests for the language.
- https://www.ecma-international.org/wp-content/uploads/ECMA-262_13th_edition_june_2022.pdf

## ES
- This is a standard for Scripting Languages.
- This standard is followed by JS.
- JS, TypeScript, CofeeScript, ActionScript.
- This is a document. Like a user manual for engineers who create JS and the Browsers.

## ES-13 (June, 2022)
- Await at top level, in modules.
- Array find from last. (Old -> arr.reverse().find(), now -> arr.findLast())

## ES6
- ES 2015.
- Major change.
- That is what most of the interviewers focus on.

## ES9
- This is a good upgrade after ES6.
- This is ES 2018.
- The trend is shifting, so some interviewers are also asking about this.

## Document Object Model
- Document refers to the HTML document loaded on the browser.
- Object refers to the JS Object that we can use.
- Model refers to the connectivity of these two things.
- DOM is a model to connect HTML document with JS Object.
- This is introduced by the browser.
- Browser is creating a global variable with the name of document.
- DOM is NOT a part of Core JS. It is injected by the browser.
- DOM refers to the WHOLE document. Not only the viewport part.

- Manipulation means changing.
- If we are changing the document, we are doing DOM Manipulation.

## Getting Reference of an element.

- getElementById() 
  - Get reference of an element using it's identifier (id).
  - If more than 1 elements have the same ID, then it will pick the first element which matches that ID.
  - If the element does not exist, it will be null.

- getElementsByClassName()
  - This will return a collection of all the elements which matches the given class name.
  - If only 1 element matches, it will still return an object with 1 element in it.
  - Because it's a collection Object, it is not recommended to loop on this. (Technically, it is possible. But don't do it).
  - Instead of looping on the object, first convert it into an array.
  - And then loop on it.

- getElementsByTagName()
  - This also returns an HTML Collection.
  - This will return all the elements which matches the tag name.
  - They can be from any where in your document.
  - To loop on this, we need to convert this as well into an array.
  
- getElementsByName()
  - This is commonly for input tags.
  - This checks and returns the Node List of the elements that match.
  - This matches on the name attribute.
  - Although this is commonly for input tags, however, it can also be used for other elements as well.
  - The Node List returned is an array, which makes it easy to loop upon.

 
## Assignments:
### Task 1:
- Create a table using HTML and try to give alternate colors to rows, but not using any pseudo claases, instead of that, use JS to get the rows, loop on them, check odd or even, then color accordingly.

### Task 2:
- Create a Light/Dark theme
- Have a checkbox and a text.
- If the checkbox is checked, then change the background of the body to black and color of the text to while.
- If the checkbox is unchecked, then change the background of the body to white and color of the text to black.




















- querySelector()
- querySelectorAll()


- Difference b/w HTML Collection and Node List.

**Name attribute for inputs is used as an identifier to recogonize the data in the backend part of the project.**


- createElement - no
- onClick, onKeyUp, events - no
- Event object (addEventListener).

## Adding of Script
### Default
- Pause, Download the JS and execute the JS and THEN resume the other Document parsing.

### Defer
- No Pause, start downloading the script paralelly to the parsing. Once the parsing is done, execute script.

### Async
- No Pause, start downloading the script paralelly to the parsing. Once the download is done, pause parsing and execute the script first.

### Further Understanding 
- https://www.growingwiththeweb.com/images/2014/02/26/async-vs-defer-twitter.png











## BOM
- BOM is parent of DOM.

### Spread Operator | Rest - Recap | Destructuring

## Modules (import, export)
### Concatenation
### Casing



- entries()
- hasOwnProperty()



- Interview Examples:
-- Try to have keys as not a string.


### IMPORTANT
- Object.freeze() / Object.isFrozen()
- Object.seal() / Object.isSealed()

Object.keys.forEach


## Multi dimensional arrays 

- <String>.split
### Shallow Copy | Deep Copy

### NaN

### Pure function

### async / await (callback hell)

### function declaration vs arrow functions (using this).
## this -> call/apply/bind (during OOP)
## new keyword;

## setInterval/clearInterval + setTimeout/clearTimeout

### RegEX
## Various functions of console.

## Primitive vs Non Primitive

## casing
## Object.freeze()
## string templating
## Concatenation