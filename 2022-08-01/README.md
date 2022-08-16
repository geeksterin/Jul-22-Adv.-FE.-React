# Aug-01, 2022

## What is JavaScript?
- JavaScript is a Asynchronous Single-Threaded Dynamic Interperted Programming Language.
-> JS is a single-threaded asynchronous scripting language.
- Single Threaded -> At max, JS will execute only 1 task at a time.
- Asynchronous -> The ability of JS to execute the functions/instructions out of their sequence.
- Loosely Typed (Dynamic) -> Data-type is not a restriction in JS.
- Interpreted / Scripting -> The conversion of the code and execution happens line by line. As compared to compilation where the whole code is converted first and then executed.
- It is case sensitive.
- fn() is not same as writing FN();

## Programming Paradigms:
- A progromming paradigm is the way in which we write the code.
For example:
- Do we make classes for everything? -> OOP
- Do we make functions for everything? -> functional programming.
- Do we write them in separate modules? -> Modular Programming Paradigm.

- JS is multi-paradigm. -> You as a developer is free to choose the approach you want.

## How do you add JS into your code?
- 3 approaches, external, internal and inline.

### Internal Approach
- We are adding the script tag internally in the html file.
- <script></script>

### Inline Approach
- This is done by adding the JS in line of the html element itself.

### External Approach
- Here, the JS code is completely separated into a different JS file and is added at the last.
- Good because it keeps the code clean.

### Developer Console | Developer Tools
- F12
- Shift + Ctrl + I / Shift + Cmd + U
- Right Click > Inspect
- Menu > More > Developer Tools

### Comments
- In HTML <!-- -->
- In JS
  - Single Line    -> // Aksjdhfjkdh
  - Multiple Lines -> /* sjkdhfjkshdfkj */

### Attribute (Concept of HTML)
- We write this in the opening tag.
- They provide additional looks and functionalities to the element.

### Why index.html
- This is the first file that the browser will look for.
- If the file name is index.html, we don't need to put it in the URL.
- If the file name is NOT index.html, then we need to write that filename in the URL.

- http://127.0.0.1:5500/2022-08-01/index.html
- http://127.0.0.1:5500/2022-08-01/


### Variables
- Variables are like containers which store some data.
- They can update the data.
- let is block scoped.
- Because JS is loosely typed, we can create a variable with 1 data type and update it with another.
- Usage: let <name>

### Constant
- These are the containers which we create but then we cannot update.
- const is also block scoped.
- Usage: const <name>

### Datatype
- Datatype is type of data. For Example:
1. String - A collection of characters, wrapped between " or '.
2. Number - A number, 1, 2, 3, 4, -50, 44.35.
3. BigInt - Very very large numbers. Upto 2^53
4. Boolean - true / false;
5. Object - It's a collection of keys and values. Keys are ALWAYS string. Value can be anything.
6. Undefined - We create a variable, but we don't define it (we don't give ANY value).
7. Null - There is a datatype, but data is nothing.
8. Symbol - These allow uniqueness and immutability.

**In JS, array is an Object.**


# Asignment:
1. Create an array and calculate the sum of that array and console it.
2. Create another array and console the largest number from that array.