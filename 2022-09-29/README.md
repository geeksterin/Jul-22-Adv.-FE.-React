# Sep-29, 2022

# Fragments Contd.

## Example of Fragment
- We can see that fragment is not added in the Real DOM.
- It is better for the CSS rules as well, specially when they are having some sort of direct child relations. Like Child Combinator, or Flex and Grids, etc.
- The shorthand <> </> was introduced in React 16.8. Before that, we used to import { Fragment } from 'react'; and use that component <Fragment></Fragment>.


# Functional Components
- React can be written in two paradigms.
- Class Based Approach vs Function Based Approach.
- Initially, Class Based approach was vay more commonly used, because functional approach did not had enough things.
- Before React 16.8 (2019). The functional components were not so powerful. They lacked a lot of features that class components could do, mainly state management.
- Initially, it was said that Functional Components are state-less components. Class Components, as stateful.
- Functional Component has less code to get started with.
- The general trend is moving away from OOP.
- It is easy to work with. And because JS has first class functions, things are very easy.
- Even CRA is using Functional Components.
- The understanding of a functional component is that the whole Component is a function in itself. It can have functions inside functions and a lot of things, but the component itself is a function.


**Note: Hooks are ONLY for functional components.**


# Lifecycle of Components / Component Lifecycle 🚲
- Lifecycle of a Component is the concept. Implement is done by Hooks for Functional Components, and by lifecycle methods for Class Components.
- Remember, Lifecycle Methods is a different Discussion then Lifecycle of Components.
- There are 3 phases for any Component to be in.
  - Mounting
  - Updating
  - Unmounting

### Mounting
- Here, the initial setup of component is done. This is just after the component is mounted, added on the DOM tree.
- If we want to write certain logic/functionality just when the component is mounted, we will give useEffect with empty dependency array.

### Updating
- This is also referred to as re-rendering.
- A rendering of a component happens when a state or a prop changes.
- If we want to write certin logic/funcionality just when the component is updated (re-rendered), we will give useEffect with the tracking state/prop in the dependency array.

### Unmounting
- This is when the component is removed from the DOM tree.
- The most common way to unmount any component is to have certain conditional rendering and not show it.
- Then that component is unmounted.
- If we have certain logic that we want to trigger just before unmounting, we use useEffect with empty dependency array and we return that from the useEffect.
- Why we need unmounting custom logic:
  - Disconnect from the server.
  - Write some cleanup code.
  - Clearing of cookies or local storage.
- In the useEffect, we write the logic to set things, we also create a cleanup function inside that, and then we return that cleanup function. Then React will keep that in memory and will execute that cleanup logic when the component is about to be unmounted.

**Note: The logic of Mounting and Updating will be trigerred AFTER the component is changed, whereas the logic of Unmounting will be trigerred BEFORE the component is unmounted.**

- One single useEffect hook is equivalen to many lifecycle methds. It is a multi purpose hook.



# Assignment:
- Use this Random API - http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000
- Fetch every 2 seconds and this time SHOW on the viewport.
- Have a checkbox if checked, show the component, if unchecked, hide (unmount) the component.
- Write the cleanup code to make sure that there is NO further API calls when the component is unmounted.








## Router
## Query Parameters
## State Parameters
## Antomy of a URL


## OMDB API - Movies DB Website








## Optional Chaining



## https://restcountries.com/

## https://openweathermap.org/api - Already done.



## Napster API

## Fake Store

## Unsplash Project

## Ref Forwarding




## Controlled and Uncontrolled Components

## High Order Components and First Order Components

## Pure Components

## Creating a Custom Hook








## Prop Drilling

## Context

## Redux



## Memory Game

## Markdown Editor


## Password Generator








## REST API
- Different methods
- HTTP status codes

# useEffect with return value;

### GEC



## Data Binding

# Further Reading:
- Local Storage
- Session Storage
- IndexedDB



# fetch with options.


# JSON

# useEffect
- API Calls

- Event Object



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
classList




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
## Various functions of console.

### Optional (If we get time)
- localstorage (session vs cookie)




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