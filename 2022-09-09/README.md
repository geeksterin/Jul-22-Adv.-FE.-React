# Sep-09, 2022

## BOM
- Just like DOM, this is also a global object.
- Similarly if we wanted to change anything of the browser, then we would use Browser Object Model.
- BOM -> Browser Object Model.
- This is window.
- This refers to the browser.
- This points to the browser's reference.
- DOM is part of BOM.
- Things that the browser implements:
  - History
  - Location for navigation
  - session
  - local storage
  - timer functions
  - fetch
  - console
  - alert
  - Document
- Finally, BOM is the global most object.
- This is avaialble everywhere.

### Type Conversion
- This can be implicit or explicit.

### Type Casting (Type Coercion)
- Also Known As Implicit Type Conversion
- This is when the compiler will change the data type automatically.
- There is certain priority in the Data types. For example, numbers will be converted to string.

### Explicit Type Conversion
- This is when the developer converts the Datatype.
- Here, in JS, to conver the Data type, we use the class constructor.
- Example:
```
let a = "1234";
a = Number(a);
console.log(a); // a as a number
```

## NaN
- Not A Number
- This is a special variable object which is globally.
- This is of datatype of a Number.
- NaN occurs when we expect a Number Datatype but it cannot be a valid Number. Then we say, it is not a number.
- Any variable has two parts, first is the value and second is the data type.
- For NaN, the value is Not a vaid number (Not a Number)
- But for Dataype, it is a Number data type.
- To check whether it is NaN or not, we use a function. isNaN();
- Two NaNs will never be same.
- We never compare using == or ===.
- Because two NaNs can be of different actual values which we don't know, so they are possible to be different. Therefore, in general, it is just considered NaN == NaN as false.

### Number vs parseInt
- Number is used for Explicit Type conversion.
- Number will try to convert the data as a WHOLE!
- It will try to convert the whole data. If it can be converted, it will give numeric value, otherwise it will give NaN.
- parseInt takes a shortcut approach.
- It will check and convert character by character. If it finds a digit next, it add it, but if it fine anything else, it will break and exit.
- If the first character itself is Not a Number, it will return NaN.
- Number("1234abcd"); //NaN
- parseInt("1234abcd"); //1234
- parseInt("abcd1234"); //NaN
- parseInt("1ab234"); //1


# Assignment:
## First:
- Prepare the answer for the question `What is the difference between BOM and DOM?`.
## Second:
- Write a JS function which takes in a string and returns the number from it.
- Example:
  - "12abcd456" -> 12456
  - "111skjhfjhsdgf222kjxmdjfhdg333" -> 111222333
  - "abcd123abcd5667" -> 1235667



// [] == []
// [] == ![]
// [] !== []

### API





### Callback Hell and Then Chaining


### async / await (callback hell)
### Event Loop

# fetch with options.


# JSON

# useEffect
- API Calls

- Event Object







## Emojee - Emoji search application - Start,





### IMPORTANT
- Object.freeze() / Object.isFrozen()
- Object.seal() / Object.isSealed()

## Unit of measurement

## BOM
- BOM is parent of DOM.

- CDN Approach

## Linting / Linter

- Changing of
src / href
id
classList




- entries()
- hasOwnProperty()





Object.keys.forEach


## Multi dimensional arrays 

- <String>.split
### Shallow Copy | Deep Copy

### NaN

### Pure function



### OOP
### oop with this keyword.
### getters and setters
### function declaration vs arrow functions (using this).
## this -> call/apply/bind (during OOP)
## new keyword;

## setInterval/clearInterval + setTimeout/clearTimeout

### RegEX
## Various functions of console.