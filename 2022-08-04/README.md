# Aug-04, 2022

## Assignment 2:
- Generate a string of n characters.


### Arrow functions (different ways of writing)
- ES6 (2015)
- `this` keyword binds to the window instead of the owner.
- Other than that, it is same, but more clean.
- If our function takes only 1 parameter, we can remove the paranthesis ().
- If our function takes in 0 parameters, we can use _ .
- If it has more than 1 parameters, then it's like a regular arrow function.
- Usage: we don't use the function keyword, but instead we use the arrow. =>


### Callback function
- It is a function that we send as an argument to another function which will execute that later.


### Higher Order Function
- It is a function which accepts another function (callback) in it's parameters and executes.
- It returns a function.
- Examples: setTimeout, setInterval, addEventListener, useEffect, then, etc etc.


### First Order function
- This is opposite of higher order function.
- These functions are those who do not take any function parameter.
- They also don't return a function.
- Math.random(), console.log, etc. etc.


### First class function
- Any function that is assigned to a variable is a first class function.
- First-class functions are those functions which can be treated as a variable.
- const helloWorld = _ => console.log("Hello World");


### Rest operator
- It allows to have infinite number of arguments.
- Example: console.log();
- Syntax is ...
- Usage: Inside function parameters.
- const fn = (...<parameter_name>) => { <logic> };

**Inside a function, we can define another function.**

### Returning a function
- From the parent function, we can return the child function.
- This child that we have returned will have access to it's original scope that was create when defining the function.
- This scope is known as lexical scope.
- This returning is called as closure.

### What is closure?
- Nesting (bundling) of functions are returned which contains a reference to it's lexical scope/environment.

### Currying
- This is 95% same as closure.
- In the child function, instead of passing all the arguments together, we pass them separately.



# Assignment:
## Task 1:
- Create a function that accepts n number of strings. (Hint - you need to use rest).
- From those strings, you need to print the string that contains maximum number of vowels. (a, e, i, o, u).

## Task 2:
- Similar to what we did for sum. Do for multiplication but for 3 levels. mul(2)(5)(20);




### Spread Operator
### NaN
### Concatenation
### Pure function

## hoisting and TDZ

### function declaration vs arrow functions.
## this -> call/apply/bind (during OOP)