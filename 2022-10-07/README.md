# Oct-07, 2022

### Pages in React
- There is no such thing as pages, those are all components only.
- We use them as pages. A single page is defined as a single route, or a single path.
- The concept of pages is only with respect to react router. If we are not using react router (or any other router) we do not use the concept of pages, then it's only components.
- We can say a page is collection of components and a website is collection of pages.


## useNavigate hook
- This is the JS way of Implementing Navigation.
- This is an alternate to Link component.
- This we will use when we don't/can't use he Link component.
- Maybe route based on certain conditions/validations.
- This is a named export of react-router-dom and we just import it.
- After importing, we call it once, it gives us a functional reference.
- Then that function we call with the path/route where we wan to take the user to. 


# Antomy of a URL
- This is an address for any resource on the internet.
- It can be for websites but it can also be for other things.
- This is very standardised and uniform.
- Uniform Resource Locator.

- Example: `http://localhost:3001/page2`

## Path
- Example - `/page2`
- Separate paths determine separate pages that we want to load.
- Different different content.
- If we want to send some sort of data, we use path parameters.
- For example - 
  - https://www.instagram.com/yush.dev/ - Here, the username is dynamic. Each person has their own username and Obviously instagram did not create separate pages.
  - https://www.youtube.com/aayushsinha - Here also, Youtube did not create separate pages for each.
- This approach of sending data to the page without creating multiple pages is known as path parameters.
- In order for react router to be able to get the data that we are sending, we use a hook known as useParams hook.

### useParams Hook
- This hook gives us the access to path parameters of that route.
- This returns an object and we have to access the key for that particular data.
- We define that key in the path string of the route. `/blah_blah/:key_name`.
- Defined using : followed by the key name.
- A single path can have multiple path parameters, however all of them needs to be written in the path of the route in the code.

### 404 in React Router
- This is when no paths are matched but we still want to show something.
- By default, if no paths are matched, react will not show anything.
- Therefore, to handle ALL the paths other than the ones defined, we use asterisk symbol (*).
- The asterisk is like a wildcard, this means to match all the paths, so that means, whatever path the user tries to open, this component will be shown.
- If that exact path already exists, then that will have a higher priority, if not then the * will be considered and the 404 component will be shown.

## Assignment:
- The project that we made for movies yesterday, we need to add a 404 page to that.



## Query Parameters
## State Parameters



## OMDB API - Movies DB Website
- useSearchParams


## IGDB

## Quote API

## Alpaca API




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