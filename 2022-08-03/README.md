# Aug-03, 2022

- FizzBuzz

// if(num % 3 == 0 && num % 5 == 0)
if( num % 15 == 0) {
  console.log("FizzBuzz");
} else if (num % 3 == 0 ) {
  console.log("Fizz");
} else if (num % 5 == 0) {
  console.log("Buzz")
} else {
  console.log(num);
}

**In JS, semi-colons are optional but it is a very very good practice to give it. In case if we don't give; JS will put it.**

## Functions
- Set of instructions that we define once but we can call multiple times.
- Series of steps.
- Block of code.

### Named function
- It's the basic regular function.
- Syntax:
  - use the function keyword.
  - After that, give the function name.
  - After that, give the ().
  - After that, give {} and inside that block, write your code.
- In order to execute, use function_name followed by ();

**Invoking a function and calling a function are the same thing.**

### Arguments vs Parameters
- Arguments are what we actually send. The data.
- They are also called Actual Parameters.
- Parameters are the variables that we use while defining a function.
- They are also called Formal parameters.

### default parameters
- These are the default values that we give and make the parameter optional.
- If we pass that argument some data then it will use that data and put it in the parameter, otherwise it will pick from the default parameters.

### Undefined
- If we are not sending a data as an argument and even if the default parameter is also NOT present, then it will give value as undefined.

### Return
- This the the response/output of a function.
- We can save it in a variable/constant and use it later.
- Or also, we can use it directly

### Anonymous functions expression
- There is no function name present.
- There is a reference stored, that can be in a variable, or a constant..
- The advantage of this is security.
- Because it takes the scope of the variable (const / let is block scoped);

### Function expression
- The functions that use function keyword are called function expression.

### IIFE
- Immediately Invoked function expression.
- Self Invoking functions / Self Executing functions.
- These are those functions that we execute only once.
- These can be executed immediately. Just after the definition of the function.
- Because we don't have any reference of the function, we cannot invoke this function even if we wanted to.


## prompt
- It's just like an alert, but it is used to take inputs from the user.
- Usage: prompt("<hint>");
- This function returns a string.
- All inputs return a string.


### Assignment:
1. Write a function to swap two numbers. without third variable
(a, b) -> fn -> (b, a)
2. Write a function to generate random string. This function takes in the length as a parameter and then returns a random string of that length.
"a-z";
5 -> fn -> hebak
5 -> fn -> psanv










### Arrow functions (different ways of writing)
### function declaration vs arrow functions.
### NaN
### Concatenation

## hoisting and TDZ