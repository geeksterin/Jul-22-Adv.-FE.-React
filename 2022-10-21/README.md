# Oct-21, 2022

# Pure function
- Any fnction which matches this fllowing criterial is considered to be a pure function.
  - If I call a function, with the same arguments multiple times. Each time it should give me the same result.
  - A pure function should not depend on any data outside of the function. (It can use the data being passed in it's parameters).
  - A pure function should not have any side effects. It should not change the original data which is passed to it. (Pass by reference should be handles properly). If the function accepts an array or object, then before manipulating it. The function should create a deep clone of that data.
- Any function saisfying all these conditions is said to be a pure function.
- Pure functions are good to have.
- This is not a technical concept, there is no keyword such as pure. This is an idea which we should follow.
- The idea is for better code maintenance and readability and reusability.
- Because the functions are pure, they can be treated as modules and easily moved from 1 place to another and easily be used by many other places.
- We want to have as many pure functions as possible in our code.
- There can not be 100% purity in the code, but as much as possible, we would want.
- Any function which does not follow 1 or more of the things is considered to be an impure function.

## Pure Components
- If the conditions are followed by the components, then they are considered to be pure components.
- If any one of them breaks, then they are considered to be not pure (impure).


## Various functions of console.
- This is not related to ReactJS.

### console.log()
- This is built in function which prints a log message in the console.

### console.error()
- This is used to show error messages in the console.
- This will be shown in red color.

### console.warn()
- This is for warning messages.
- This will be shown in ornage/yellow color.

### console.table()
- This is used to display the data in table format.
- Like heading and then each record, (key/value pair) will have it's own row.

### console.count()
- This is a counter.
- Every time we call this, it will increment it's value and show that to us.

### CSS in console statements
- We can use %c directivs (It is always %c because c is for CSS).
- When this is used, the CSS style should be passed as a second parameter.
- Then that css will be applied to the text and shown in the console.
