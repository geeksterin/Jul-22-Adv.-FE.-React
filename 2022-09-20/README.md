# Sep-20, 2022

**JS is a synchronous single-threaded programming language. However, with the implementation of promises (queues), it has the ability to execute non-blocking asynchronous code.**


# Event Loop
- This allows the use of asynchronous code in JS.
- It makes the code look like it is running parallely.
- This makes promises possible.
- This is an infinite running loop which checks some queues and decides which task to pick next.
- It can pick tasks from 3 places:
  - Call Stack - Currently whatever is executing, it will pick from that.
  - Micro Task Queue - Promise based (Promises, ticks, mutation Observer)
  - Macro Task Queue - Web APIs (setInterval, setTimeout, requestAnimationFrame).


### Call Stack
- This is where the main execution happens.
- When a function needs to be executed, it is pushed into the call stack.
- When the execution is finished, it is popped from the call stack.
- If there is anything in the call stack, that thing is executed first.
- Call stack has HIGHEST priority of execution.
- Stack is a LIFO system, that means, the function which is added last to the stack will complete it's execution first.
- To better understand this, practice the assignment.


### Micro Task Queue
- These are all mostly for promises.
- Mostly used for Logic execution. Like we got data from the server, so we need to manipulte that.
- This is a first in first out data structure.
- This stores references to the function executions.
- If a promise has multiple .then, in that case, they will be executed according to the sequence they were added at.


### Macro Task Queue
- This is primarily used for UI Updation.
- Mostly used by WebAPIs.
- This is also known as a Callback queue.
- This is a lowest priority queue.
- This will onyl be checked once the Call stack is empty and the microtask queue is also empty.

## Starvation
- Means no resources.
- In Event loop, it is possible to starve the Macrotask queue.
- The JS engine is busy executing the Call stack and microtask queue that it doesn't get resources to execute the macrotask queue.
- This is something we need to be careful about when writing promises inside loops/recursions.
- This is a BAD thing.


# Assignment:
- Draw the call stack LIFO for fibonacci series
- Try the understanding of Fib(5).