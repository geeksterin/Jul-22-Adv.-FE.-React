# Oct-11, 2022

# Continuing on the Cinematic Project
- Implementation of the Detail Screen.


*Note: useSearchParams and useParams are two different hooks, useSearchParams are for query parameters whereas useParams are for Path parameters.*

*Instead of using a .then and .catch, for async await approaches, we can use a try/catch block.*

## Optional Chaining Operator
- This is a vanillaJS concept.
- This was introduced in ES11.
- Idea is simple, if the data exists, then execute the next chained function.
- Otherwise, return false.
- Example:
```
const obj = {
  key1: [1, 2, 3, 4, 5],
  key2: undefined
};

obj.key1.length; 5
obj.key2.length; //Error, cannot read property length of undefined.

//Approach 1:
if (obj.key2 !== undefined) {
  obj.key2.length;
}

//Better Approach
obj.key2?.length;
```
- This only checks for undefined, this does not care about the data type.
- It will check whether this thing is defined or not. This checks for undefined.
- If the property is not defined, then the chained method/property will not execute.
- Can be used heavily in API responses to check for things.
- Chaining because it is for chained properties and methods. (.something.else.another.thing)
- Optional because the property might not exist, then we need to care about it.
- We can have multiple optional chaining operators in a single statement.
- Example - obj?.key2?.length;

**Note: In react, this error is very common when we try to use any api with default state as empty object. It will try to read some property of undefined key and will crash.**

### Another API for Cinematic Project
- https://restcountries.com/#api-endpoints-v3-full-name
- This API is used to get a country information.
- We are using this to get the flag image from it's country name.
- This is used in the Detail Component.