# Sep-08

## Primitive vs Non Primitive Datatypes
- This is a general Programming Concept.
- Primitive data types are like build blocks of the data.
- They cannot be broken down further.
- Example:
  - number
  - boolean
  - Symbol
  - Undefined
  - Null
- Non-Primitive data types.
- These are made up of various primitive data types.
- Example:
  - Arrays
  - Objects
- Because Arrays and Objects are collections, they contain various primitive data types or non primitive data types.
- In JS only, Strings are considered as Primitive Data type.

## Promises
- The Data type of a Promise is an Object.
- These are those Objects which contain reference to the execution method.
- The method will be executed, but later.
- Later happens when there is no load on the thread.
- By default, it is in a Pending state.
- When the execution is completed, it can either be in:
  - Resolved / Successful / Fulfilled / Completed
  - Rejected / Unsuccessful / Unfulfilled / Failed.
- We need to use Promises for heavy tasks. Technically called as blocking tasks.
- Blocking Tasks:
  - These are those logic/functions which can take some time to execute.
  - Therefore while they are executing, they might block the main and only thread.
    - Network Call
    - Database Calls
    - Permission Access Request
    - Notifications
- Non Blocking Tasks:
  - These are regular tasks.
  - Example:
    - Mathematical Calculation.
    - Looping.
    - Concatenation
    - Array methods,
    - etc.

- To Create a new Promise, we use the class and new keyword. Then in that class's constructor, we will pass the heavy function that we want to execute. Then, inside that callback which we passed, we will accept 2 parameters, first is resolve, second is reject.
- These two parameters are in themselves callback function. Resolve and Reject.
- In the promise function, if we are successful, then we will call the resolve parameter. Or if we were unsuccessful, we will call the reject parameter.
- In both of these callbacks, we can send values. These values will be handled by the callbacks of then and catch methods.

- For a promise, if we want to execute anything after the promise has been resolved, we use a .then method. This method takes a callback contain the logic that needs to be executed. This method will only be executed once the original promise is fulfilled.
- For rejected case, we use .catch. This also takes a callback for logic to be executed when the promise has failed/rejected.


# fetch (AKA fetch API)
- The purpose is to get something from somewhere.
- In the context of browser and JS, fetch is used to get data.
- fetch can get data from anywhere. It can be your computer, it can be some very ver very far server.
- fetch is NOT part of Core JS. This is something which the browsers will inject.
- The browser maybe doing some urgent processing at the time, so it will return a promise.
- Also it returns a promise because it doesn't know how much time it will take to get the data.
- Fetch is a function.
- This function accepts the URL from where data needs to be fetched.
- This returns a promise.
- On that promise, we can use a .then function and pass the callback containing 
- Inside the then callback, we can use a parameter which will get the response of that API call.
- To extract the actual data, we need to handle another promise.


# Assignment:
- Implement an input field, in that field the user will enter a github username.
- Search for that username with this URL.
- Use the URL - https://api.github.com/users/<username>
- Replace the Github Username with the input entered data.
- fetch this data and show in the console.













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