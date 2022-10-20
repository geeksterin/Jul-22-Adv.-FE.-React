# Oct-20, 2022

# setTimeout
- This is a function. (Higher Order Function).
- This function takes 2 arguments. First is a callback function and second is a time (it is in milliseconds).
- Now, the setTimeout will wait for that timeout to happen, then it will call the callback function.
- That's why set Timeout, it will call the function after the timeout has elapsed.
- When we call this setTimeout, it returns an id. (This is of a Number datatype).
- This id is a reference to the timeout.

# clearTimeout
- This is used to stop the temout from happening.
- In order to use this, we need to call the method clearTimeout and pass the id that we received from the setTimeout function call.
- We need the id because it is possble that on a single page, there are multiple timeouts, therefore we need to specify which one to clear.
- This is a First Order function.
- If the timeout has elapsed and the callback has already been called, then calling the clearTimeout will not be helpful.

# setInterval
- This is also a higher order function.
- This also takes a callback method and a interval (in milliseconds).
- This will call the callback method after every x number of interval milliseconds that we pass.
- This will go upto infinite loop until we manually stop it.
- When we call the setInterval, it will give an id as reference.

# clearInterval
- We pass the reference id (which we got from setInterval).
- This will stop the interval. That means, no more calls of that callback method.

*setTiemout will only call the callback method ONCE after the timeout milliseconds whereare setInterval will call the callback method upto infinite number of times at a gap of interval milliseconds.*

**Note: 1 second is 1000 milliseconds.**

## <String>.split()
- This method is used to convert the string into an array.
- Here, we can pass an argument of delimitter. This is used to split the string into chunks (elements) of the array.
- Example "123a123456a121a2a3a4a"
  - Here, we call the split method with delimitter as "a".
  - OP -> [123, 123456, 121, 2, 3, 4]
- Here, we can also see that delimitted is actually removed.
- The term delimitter is also referred to as separator by many people.
- If we are not passing any delimitter. Then the split method does not know where to split. Therefore it will actually not split and return an array with the whole string as zero-th element.
- If we pass empty string, in that case after each character the condition for delimitter will meet and therefore, the output array wil be an array of characters, (1 character per element of that array).

# Shallow Copy (Shallow Clone)
- This is just creation of a new reference (pointer) to the same data (memory location).
- That means, if we update from any one place, all the refences of that object will be updated.
- That means all the variables will now show the updated dat.
- This is not limited to creation of a copy. But even if we pass this object as a reference to a function. Then also that argumet will be passed as a reference.
- This means that if we change anything regarding that object inside the function even. The other references to that data will also get updated.
- For this same reason, this is known as Pass by Reference.

# Deep Copy (Deep Clone)
- This is where we create an element by elemet copy of the object.
- Here, each copy will have it's own memory location and it's own copy of data.
- Now, even if a particular variable changes the data, other variables will not be affected by it, because each will have it's own copy of the data.
- The way we do this is by Serializing (in this case, JSON.stringify) and converting it into an array and then unserializing back (in this case, JSON.parse) into the object format.
- Many people think that doing spread operator might make a deep clone. Howver, if the depth of source object is high, then the spread operator approach is not much useful. Instead of that, the approach of JSON stringify and parsing should be used.
- Example of Spread approach: const another = { ...obj }
- If we have any sort of nesting (like having an object or even an array inside the main object/array), then we should be using JSON.stringify and JSON.parse approach. For other situation, we can use the Spread operator approach.

*Both of Shallow and Deep Clone concepts work for arrays as well.*

### <noscript></noscript>
- This is a tag inside which we typically write a message that the browser does not support JS.
- This tag will not be shwon by the browsers that are able to run script tags.
- This tag will only be visible when the browser is not able to run the script tags.
- In react, we use this because the whole react application is dependent on JavaScript, so if the browser only does not support javascript, then we need to handle that. (If the browser does not support JS, then we cannot run the react application on that particular browser).



# Further Reading:
- Session Storage - This is just like Local Storage but this is volatile, this will get cleared when the tab is closed. This is only during the session time.
- IndexedDB


### Pure function
## Pure Components


## Various functions of console.

## Controlled and Uncontrolled Components
## Data Binding




## Project Ideas
## IGDB
## Quote API
## Alpaca API
## Napster API
## Fake Store
## Unsplash Project
## Memory Game
## Markdown Editor
## Password Generator




## Ref Forwarding



## Prop Drilling
## Context
## Redux







# Code Splitting / Code Chunking / Bundling / Suspense



## REST API
- Different methods
- HTTP status codes


### GEC




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




### RegEX






## Lifecycle Methods (Class Components)

### OOP
### oop with this keyword.
### getters and setters
### function declaration vs arrow functions (using this).
## this -> call/apply/bind (during OOP)
## new keyword;


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