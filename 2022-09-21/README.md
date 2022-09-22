# Sep-21, 2022

**Note: setTimeout/setInterval gives an assurance that the callback will not be executed before the timeout or interval amout, but it can be executed AFTER. So suppose, in my setTimeout, the timeout is 500ms, that means, the execution of the callback will have ON OR AFTER 500ms. Because of the Event Loop.**

# Contd of Event Loop discussion.

## Promises
- They can have either of 2 results.
- Successful - It executes .then method.
- Failed - It executes .catch method.

# async / await
- This is just syntactical suger.
- Instead of writing .then, we use await keyword.
- Await keyword tells that the JS Engine needs to WAIT for this promise to complete before moving ahead to the next line of code.
- Anywhere if we are using an await keyword, we need to tell the JS Engine, that the respective function is an async function.
- That means, anywhere we are using await, we also need to use async. The other way round is not true. We CAN have async function with does not contain any await keyword.
- This is just a different way of writing promises.
- async tells that there is an asynchronous code inside that function.
- For handling of errors. We use a regular try catch block. If any of the promises fail, then we have the catch block exectued and handling the error.

*We DO NOT need create-react-app to create a react application, we can create all the files manually, it might take us some time, but it is completely possible.*

## React useEffect with empty dependency array.
- useEffect is called ATLEAST ONCE.
- This is called when the component is loaded (mounted).
- If we give the dependency array as empty, use Effect has nothing to track.
- In that case, useEffect will only be called once during the component loading and never again.
- This is exactly what we wanted, call the API initially during loading stage and never again.
- We used useEffect with an empty dependency array.
- In order to use async await inside useEffect, we need to use an IIFE.


# Assignment:
- Call the Endpoint:
- https://api.github.com/users/<username>
- Show the following information:
  - name
  - creation date
  - followers
  - following
  - public_repo count.
- Do this in REACT.