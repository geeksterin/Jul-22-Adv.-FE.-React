# Aug-10, 2022


**Script tags are written at the bottom of the page. Just before the closing of body.**

## defer Attribute
- This is an attribute that we give to the script tag.
- This tells the browser to execute the script AFTER the dom has loaded.
- Because this will ALWAYS execute after. It does not matter where write this.
- We write in the head tag.
- To keep things clean and easy to understand.
- Defer is an english word - Meaning to do something at a later time.



## Array Functions (Contd...)
- Remaining methods of your array class.

### Concat
- Concatenate means join/combine.
- In this case, concat function is used to MERGE two or more arrays.
- Whichever array we want first, we use the concat function on that.
- After that, wejust pass the arguments in the sequence which we want.
- If we pass a primitive data type, it will try to auto convert into an array and handle that.
- There is a better/cleaner way using spread operator.

### sort
- This built in function is optimised.
- This will sort your array.
- We can send a callback function to this. That means, this can be used for complex arrays.
- This is an in-place algorithm. That means, this will change the original array.

- From the callback function, we return a number. Basically, we return how much difference do we have from the initial item.
- If the integer we return is negative, that means a < b
- If the integer we return is positive, that means a > b.
- If the integer is 0, that means a = 0;
- We can use -1, 0, 1. But a more optimized approach is that we also say how much difference there is.
- This is like highly optimized sort.
- Easy way to remember is in the callback function, we will get a and b.
- If we want in ascending, we write a first in the difference logic.
- If we want in descending, we write b first in the difference logic.

### fill
- Fill the array with given element.
- This is a simple function (which does not need any callback fn).
- In this, we pass the data that we want to fill in the first argument.
- Second argument, we pass the starting index (inclusive). It will fill element starting at that index.
- Third argument, we pass the ending index (exclusive). It will fill the element upto index-1.
- It is a First order function.

## reduce
- This function is used to reduce the dimensionality.
- This is very different than flat.
- Idea of this is to perform an aggregation function. (Having a total, counter, average).
- This accepts a callback.
- In the callback, we will get 4 parameters. (cumulative_value, element, index, original_arr).
- We need to return the new cumulative value from that callback function.

## every
- This is opposite of some.
- This also returns a boolean.
- But this will return true when ALL the elements are matching the condition.
- If any one is failing, this will return false.
- This says that every element should match the condition.
- This also accepts a callback function.
- In the function, we get element, index, original_array.
- We check the logic and return true/false (boolean).
- If all the time the array gets true, then that means every element is matched, then every will also return true.
- Otherwise, if any one is not matching, it will return false.


# Task:
- I have a string - 
const text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
- Your task is to:
1. Print the word which contains maximum vowels. [Using array method].


2. You just copy paste the json from here - https://fakestoreapi.com/carts
- To calculate finally a pair (<product>, <count>).
-- Part 1, calculate the total quantity for product id 1.
-- Part 2, put it in a function and calculate for all of them.





## Object
### How to Create
- {} syntax
- Constructor approach

### Key Values
- Keys as string

- Syntax for keys without quote
- Key as a variable

- Interview Examples:
-- Try to have keys as not a string.

### delete operator

## Object Methods
- keys()
- values()
- entries()
- hasOwnProperty()

### IMPORTANT
- Object.freeze() / Object.isFrozen()
- Object.seal() / Object.isSealed()

Object.keys.forEach


## Multi dimensional arrays 

- <String>.split
### Shallow Copy | Deep Copy
### Spread Operator | Rest | Destructuring
### NaN
### Concatenation
### Pure function
### Casing
## hoisting and TDZ

### function declaration vs arrow functions.
## this -> call/apply/bind (during OOP)
## new keyword;

## setInterval/clearInterval + setTimeout/clearTimeout