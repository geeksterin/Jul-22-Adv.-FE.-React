# Sep-19, 2022

# API Data exchange.
- Getting data from backend.

## API
- A way using which two pieces of software can communicate.
- Medium of exchange of information.

## fetch
- This is a functionality which is used to get data from any server.
- This functionality is NOT part of JavaScript. This is injected by the browser.
- window.fetch()
- fetch will return a promise because this can be a time consuming task and might not be executed immediately.
- The response is in a text format. However, the server can decide to send in a different format.
- JSON Format is used commonly. Sometimes, we might see XML as well (Second most popular format of information exchange).
- Because JSON is very commonly used, we have a helper function called json(). This function returns a promise. Once resolved, the promise result will contain the converted json data.
- If we don't want to use json, we extract the text from the response. To do that, we use the function text(). This also returns a promise, on resolving which we will get the text data. (Like raw data).

*Any Request or response is made up of 2 parts, a head and body, headers contains information like URL, status, authorization, cookies, cors, origin, etc, etc. Body contains the data. Body is also referred to as payload.*

### Client-Server Architecture
- Client (mostly browser) makes a request.
- Request is sent to the server.
- Server will process it.
- Server will send the response back to the client.

### Network Tab in Developer Tools
- This tab stores information about all the network calls that my browser tab will make.
- If we click on any one of them, we can see more information about that particular network call.

- To explicitly convert string to JSON, we use JSON.parse().
- To explicitly convert JSON to string, we use JSON.stringify().

### Polling
- Making a request to the server every X number of seconds to fetch the latest data.
- Example, during cricket match, the app will make request to the server every 5, 10 seconds to get the latest score information.
- This is not an indeal practice, but it is VERY VERY easy to implement.
- Because of that, this is a very common practice.

## Callback Hell
- This is when we have nested callbacks.
- Having one callback inside another callback.
- This leads to a triangle like look which we can easily sense and connect with the callback hell.
- This is bad for code readability.
- Because of that, the maintanability is also a problem. If we cannot even read the code, how can fix a problem or add a feature.
- We want to avoid this.
- The simplest solution is to use a then chaining.

## Then chaining
- Instead of putting callbacks of promises inside one another, we will return that promise.
- Because we return, we can use the .then() method at the parent level.
- We can keep on doing this multiple times, ending in the creation of a chain of .then methods.
- Promise.then().then().then().then().
- We can also write in new lines for each .then(). NOTE - DO NOT PUT SEMI-COLON after .then() if there is another .then() after it.
- ```
  Promise()
  .then()
  .then()
  .then()
  ```
- This is not an ideal approach, but still is better than the callback hell.


# Assignment:
- Create a simple page on Vanilla JS.
- Have a button, upon clicking of that button, it should load the data.
- https://jsonplaceholder.typicode.com/users
- Show an unordered list containing `${f_name} ${l_name} (${email})`














### async / await (callback hell)

### AJAX


### JSON

## REST API

# useEffect with empty dependency array
# useEffect with return value;


## Data Binding

# Further Reading:
- Local Storage
- Session Storage
- IndexedDB


## Fragment



### Event Loop

# fetch with options.

#useRef

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