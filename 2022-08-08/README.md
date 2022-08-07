# Aug-08, 2022

## Array
- It's a collection of data.
- The data type can be anything in a single array.
- Ideally, you should have similar type of data in your array.
- heterogenous -> Mixed
- Arrays are Objects!

## Creation of an Array
### Approach 1 - Square bracket syntax.
- const <variable_name> = [];
- Square brackets means it is an array.
- You can put the values inside it.
- All the values are separated by comma.

### Approach 2 - Using the constructor
- In JS, there is a class called Array.
- We just need to instantiate (create) an object of that class.
- new keyword is used here.
- Usage: const <variable_name> = new Array(<elements>);
- In the constructor, the elements are separated by the comma.

## Index
- This is used to identify which element is which.
- This is plain and simple counting.
- Counting starts from 0.
- These are all integer numbers.
- 0, 1, 2, 3, 4, 5...

### Access elements from an array
- Using the [];
- Usage: <variable>[<index>];
- Indexes should be integers.

### Updating an element
- Usage arr[<index>] = <whatever_value>;

### Adding an element
- A built in function-> <variable>.push()
- Whatever value we need to push, we will put in as an argument.
- This will automatically put that element at the last location.
- Basically, this is equivalent to append.

### Removing an element
- A built in function -> <variable>.pop()
- This will remove and also return the value/element which it has removed.
- Pop will remove from the last.
- What if I want to remove from the middle.
- I have and index and I want to remove an element from there.


### splice
- First argument we send is the starting index.
- Second argument we send it the counter of delete.
- After that, any arguments we send will be used to insert.
- Usage - <array_variable>.splice(<starting_idx>, <len_to_delete>, <insertion_values>);
- It will start deleting from the startin index and keep on deleting upto length number of items.
- Once done, it will check if there are element to insert, if yes then it will proceed to insert those elements.
- This will change the original array.

### slice
- It is basically substring, but for arrays.
- This one you give string and ending indexes.
- It will include the staring index but exlude the ending index.
- If we give negative index. then it will start from the last.
- This will not change the original array.
- This returns a copy (Shallow copy).

### join
- This combines an array into a string.
- We pass the glue as an argument. This is also called as separator
- This will join the elements and return a string.

### shift
- This is like pop but from the 0th index.
- This also returns the removed element in case if we need it.

### unshift
- This is opposite of push
- push will push from the last index.
- unshift will push from the 0th index.


### length
- For any array, we can find the size (in terms of number of elements).
- This can be done by using the length property.
- This is a property and NOT a function.
- It does not care about the custom keys that we try to make.
- If we add a valid key which is a very large number, it will try to accomodate that by increasing the size of the array.

**Shift and pop are similar (in sense of removing), whereas Unshift and push are similar (in sense of adding).**
**Arrays are collections of elements.**

## Task:
1. We have a string, we can take any value for that and we need to calculate the number of words of that string.
2. Create an array of random numbers (take 10 elements). Sort that array and then find:
 - Mean
 - Median
 - Mode







## Array functions.
- reverse
- flat ???
- concat

## Multi dimensional arrays?
- 

## Array functions (built-in)
- sort
- fill
- reduce
- map
- filter
- some
- find
- forEach
- findIndex
- every



- <String>.split
### Shallow Copy | Deep Copy
### Spread Operator
### NaN
### Concatenation
### Pure function

## hoisting and TDZ

### function declaration vs arrow functions.
## this -> call/apply/bind (during OOP)
## new keyword;

## setInterval/clearInterval + setTimeout/clearTimeout