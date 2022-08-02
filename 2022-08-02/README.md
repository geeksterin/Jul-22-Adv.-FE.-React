# Aug-02, 2022

**Note: Use const as much as possible.**

## Block of Code
- Instructions between a set of curly brackets.
- It can be a conditional block, functional block, iterative block, just plain {}.

## Conditionals
- Checking for condition and execute something if the condition is satisfied or something else if the condition is not satisfied.

### if else
- Usage:
if (<condition>) {
  //What to do when the condition is true
} else {
  //What to do when the condition is false
}
### ladder
- When we want to check for multiple things one by one and each of them have different instructions to execute, we prefer using an if, else if, else if, else logic.

### ternary
- Checking a condition quickly to gather a result.
- Usage:
<condition> ? <true_situation> : <false_sitaution>
- Kind of, ? means the if keyword and : means the else keyword.

- Nesting of ternary is allowed.

### switch
- When we want to compare the value with something. Then we use switch.
- It is used for exact comparison.
- When we want to check for equal of two variables. Instead of an if else ladder, we can prefer this.
- Usage:
switch(<variable_to_check>) {
  case <values>:
    //Logic
    break;
  default: //This is equivalent to the else block of your ladder.
  //Logic
  break;
}

**Nesting -> Having one type of thing inside the same type of thing.**

## Iterative
- This is loops, used to run the same logic again and again until the specified condition is broken.

### for
- This is the bare minimum for iterating.
- It needs 3 things: initialization, condition, increment/decrement.
- Usage:
for(<initialization>; <conditional>; <increment/decrement>) {
  //Logic to loop on.
}


### while
- When we don't know exactly how many iterations we need, we will use a while loop.
- While loop focuses on condition.
- Usage:

while(<condition>) {
  //Logic to execute.
}
- This is an entry controlled loop.


### do while
- This is an exit controlled loop.
- This will execute atleast once.
- Usage:
do {
  //Logic to execute;
} while(<condition>);

### for of
- This is for an array.
- Used to loop on it and give every element.
- Usage:
for(const <eleme> of <array_variable>) {
  //Logic to execute.
}

### for in
- This is for INdex.
- In case of arrays we generally don't need it, but in case of objects, we need it.
- Usage:
for(const <key> of <object_variable>) {
  //Logic to execute
}

### break
- break will break outside of the loop.

### continue
- Continue will skip the current iteration and perform the next iteration.

**Note: the forEach in Java is VERY DIFFERENT than the forEach in JavaScript.**

## Functions
### Named
### Attributes vs Parameters
### default parameters
### Return
### Undefined

### Anonymous functions
### Function expression
### IIFE
### Arrow functions (different ways of writing)
### function declaration vs arrow functions.


## Assignment:
1. Write a logic to check whether a number is a prime number or not.
2. FizzBuzz
- div by 3 & 5 -> FizzBuzz
- div by 3 -> Fizz
- div by 5 -> Buzz
- Otherwise -> Number
- Write a loop to print this series from 1 to 200.