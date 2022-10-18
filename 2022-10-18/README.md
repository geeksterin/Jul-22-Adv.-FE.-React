# Oct-18, 2022

*Session storage is just storage of data which gets deleted when the tab is closed (this is a volatile storage).*

## Cinematic
- Infinite scroll
- Footer
- Hosting

# High Order Components / Higher Order Component / HOC
- These components can accept or return (or both) another component.
- We can send any component as a child to another component, then that another component is said to be an HOC.
- This is very similar to a Higher Order Function. There, we used to deal will functions being passed as an arguments. Here, we deal with components being passed like that.
- We can just see the tag of that Component and say, if the tag is a paired tag, then it is higher order component. Otherwise (self-closing), it is a first order component.
- For example, Box, Card, Stack, etc etc from Mui.
- HTML elements like div, p, h3, h2, etc etc. are not considered as HOC, because they are not even Components.

## First Order Components
- Any component which is not an HOC is a First Order Component.
- This component cannot accept any chidren.
- We are not sending any childeren to it. Even if we send, it will ignore because the logic of handling these children is not implemented.

- Examples done inside hoc directory.

*Most of the Self Closing Tags are First Order Components, but not all of them, because it is possible that the Component is a Higher Order Component, but written in Self-Closing (It does not make sense practically, but technically it is possible).*

**Note: Children and Props are different, do not confuse between them. Props are sent as a attributes in the opening tag whereas children are sent between the opening and the closing tags.**

# Creating a Custom Hook
- Hooks are additional functions that give superpowers to our application.
- These are said to be hooks because they kind of use state and hook into the lifecycle of the components.
- We can create our own hooks for various functionalities.
- Example - To check whether the internet is prsent or not.
- End of the day, everything is going back to the implementation of state only. Because state is the only observable. (If a state changes, we will know. That is not possible anywhere else). 
- Hooks can depend on another hooks, it is okay.

# Assignment:
- Implement this internet online/offline functionality in the cinematic project.
- If the user goes offline, instead of should the particular component, show like a broken cloud image and say no internet.





## Various functions of console.

## Controlled and Uncontrolled Components

## Data Binding


## Pure Components



## IGDB

## Quote API

## Alpaca API





## https://restcountries.com/

## https://openweathermap.org/api - Already done.



## Napster API

## Fake Store

## Unsplash Project

## Ref Forwarding







## Prop Drilling

## Context

## Redux



## Memory Game

## Markdown Editor


## Password Generator




# Code Splitting / Code Chunking / Bundling / Suspense



## REST API
- Different methods
- HTTP status codes


### GEC




# Further Reading:
- Session Storage
- IndexedDB



# fetch with options.


// [] == []
// [] == ![]
// [] !== []






### IMPORTANT
- Object.freeze() / Object.isFrozen()
- Object.seal() / Object.isSealed()


- CDN Approach

## Linting / Linter

- Changing of
src / href
id


- entries()
- hasOwnProperty()





Object.keys.forEach


## Multi dimensional arrays 

- <String>.split
### Shallow Copy | Deep Copy

### NaN

### Pure function

## Lifecycle Methods (Class Components)

### OOP
### oop with this keyword.
### getters and setters
### function declaration vs arrow functions (using this).
## this -> call/apply/bind (during OOP)
## new keyword;

## setInterval/clearInterval + setTimeout/clearTimeout

### RegEX




12. Classes
Defining a classes
Class Instantiation
Class Constructor
Default values with constructor
Class methods
Properties with initial value
getter
setter
Static method
Inheritance
Overriding methods
Exercises
Exercises Level 1
Exercises Level 2
Exercises Level 3
13 Document Object Model(DOM)