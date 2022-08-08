# Aug-09, 2022

## Array Methods
- These are the built in functions of Arrays.
- We call them methods because they are part of the Array Class.

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods


### forEach:
- This is used to loop on every element of your array.
- This takes a callback. In the callback, this will give commonly 2 parameters that we need. Element and index.
- We can write whatever logic that we want on those elements.
- However, we cannot return.
- We cannot manipulate that array.
- This is the exact basic alternate to for of. 
- There is 1 difference, we cannot use break and continue keywords here.

### map
- This we will use A LOT in React.
- This is like forEach only, but we can return items from the callback function.
- This can be used to map and create a manipulated array.
- This can create a copy with the changes that we write in the callback function. Basically creating a 1-1 map with the source and the copy array.
- The difference will be the logic that we write in the callback function.

### some
- This will return true/false (boolean) on whether some elements match the condition or not.
- Some means 1 or more than 1.
- The purpose of this is just to check.
- From the callback function, we will return boolean.
- If for 1 or more cases the some function gets boolean true. Then it returns true.
- Meaning, there are atleast 1 elements which match the condition.
- This also accepts a callback. That callback will have element, index and original_arr.
- Callback will return boolean.

### filter
- This is similar to some, but instead of just returning true/false. This will return the array of elements that match the condition.
- This also takes callback.
- This will return a list of elements that match the condition.
- If for any element, we are rerturning true, then that element will be added to the filtered list, otherwise it will be ignored.

### find
- This is kind of just like filter. But this returns the FIRST element which matches.
- Filter returns the ARRAY of all elements that matches whereas find returns the element itself.
- ONLY RETURNS FIRST OCCURENCE.
- Usage: When you are search for something, it will return that.
- In a case where we have more than one elements which matches, then it will return the first occurence.

### findLast
- Kind of same as find, but this returns the LAST occurence.


### findIndex
- This is just like find, but instead of returning the element, it will return the index.
- We pass the callback function, that function will get 3 parameters, element, index and original_arr. The callback can return boolean.
- This will give INDEX of the first element which matches the condition.

### findLastIndex
- Kind of same as findIndex, but this return the index of LAST occurence.

**We do have indexOf method, but that method does not accept any callback, therefore that method cannot be used for complicated arrays.**


### reverse
- This will reverse the array.
- [1, 2, 3, 4, 5].reverse() => [5, 4, 3, 2, 1];
- This will change the original array.
- This is an in place algorithm. Which means, this will change the original array.
- We have to be a little careful with this.

### flat
- This is used to flatten the array.
- Reducing the dimensionality.
- This method by default will reduce the dimensionality by 1. However, in case we wat to reduce even more, then we can pass the depth as an argument.




# Assignment:
- Use this object:

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

### Task 1:
- Use a forEach and calculate the total price of the products.
### Task 2:
- Use a filter and filter out the products with invalid prices.
### Task 3:
- Use find to find the price of avocado.





- concat
- sort
- fill
- reduce
- every





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