# Sep-28, 2022

# JSON
- Lightweight data-interchange format.
- JSON is a format of how we store and tarnsport the data.
- Format -> Like a structure.
- It's a notation which makes the data look like an object.
- This object notation picked from JS.
  - Because it is easy to understand by humans.
  - It is very lightweight
  - Because JS is most commonly getting used.
- This NOT the ONLY format for information exchange. Example, XML.
- JSON is NOT same as JavaScript Object!!!
- Example:
```
//JS Object
const obj = {
  first_name: "Aayush",
  last_name: "Sinha",
  role: "Educator",
};

//JSON
{
  "first_name": "Aayush",
  "last_name": "Sinha,
  "role": "Educator"
}
```
- Data transfer is almost always done in string format.
- Important Points:
  - Keys are strictly inside double quotation marks.
  - After the last property (key value pair) we cannot give a comma. This is true for arrays as well.
  - JSON cannot have comments, it is data only.
  - JSON does not support all the data types as a JS object. (For eaxmple, there is no undefined in JSON).
    - String
    - Number
    - Boolean
    - Array
    - Object
    - Null
- JSON is a way to store the data. In JS, we need to read, then we process it and then we can handle/read/manipulate whatever we want.
- To convert from JS Object (in memory variable) to a JSON String, we use JSON.stringify();
- Most of the times, JSON is stored/transferred in String format.
- To convert a JSON string into an object which we can interact with, we use JSON.parse();
- We say lightweight because it takes less space/size.
- Full form of JSON -> JavaScript Object Notation.


## Refresh header
- This is used to redirect the browser to another URL.
- This is used for payment gateways to redirect to the success/failure screens.
- Previously, it was used to refresh the page.
  - For example: To update the cricket scores every 30 seconds. Now, we use API calls for that, we setup a SetInterval and use axios/fetch for that.
- But still, it is a good knowledge to have. 
- Usage: <meta http-equiv="refresh" content="<delay in seconds>;URL=<URL to load>" />


# AJAX
- This is an old technology, first appeared in 1999.
- Before AJAX, in order to load a certain data, we used to refresh the whole page.
- AJAX introduced a way/approach to communicate with the server without refreshing the page.
- If before AJAX if we were to like someone's photo, it would send that data to the server and do a complete page refresh with the latest data.
- After AJAX, we were able to make API calls and update certain parts of the webpage without triggering a whole page refresh.
- This involved the use of DOM Manipulation, XHR API calls (XMLHTTPRequest).
- It gave the possibility of changing a particular part of the webpage without reloading everything.
- Full form of AJAX -> Asynchronous JavaScript and XML.


# Virtual DOM
- This is also commonly referred to as VDOM.
- This is like a copy/reference of the real DOM.
- This copy is a virtual (In memory) reference of the DOM.
- ReactDOM does this for us.
### Reconcilation & diffing keywords
- We as a programmer do not need to handle connection and updation to the Real DOM.
- When we are changing multiple things in a very short period. Like in 1 tick of the event loop.
- Then, it will push all those updates in the Virtual DOM and make 1 update to the Real DOM.
- Virtual DOM helps for high performance and optimizations.
- When we change something, that change is written on the Virtual DOM first, then React will check and update the real DOM.
- Diffing is a programming concept, not specific to react. This defines are two trees are compared.
- Diffing is short for checking difference between 2 things.
- Reconcilation is basically syncing of both the DOMs (Virtual DOM and Real DOM).
- React DOES NOT want the programmers to use/connect to the Real DOM. We should always refer to the virtual dom.


## Dependencies
- These packages are added to the final build.
- These are the production dependencies.
- To install packages, we just use - npm install <package name>.

## Dev dependencies
- The packages which are needed ONLY for development purposes are added to devDependencies.
- These packages are not included in the final build of the project.
- These packages NEVER go into production.
- For example, testing packages, we want them only during development time, once released, there is no point in testing.
- To add a package for devDependency we follow - npm install <package name> --save-dev.
- When building the production build (deploying our frontend), nodeJS will not check the development dependencies, it will only install dependencies.
- We want to do this in order to keept the build size minimum. That directly impacts the performance.
- If there is any package that we do not want for the production build, we do not install that in dependency, we install in dev dependencies. To do that, we use the flag --save-dev.
- Another example of dev dependency, linter.


# Fragment
- Typically from a component we return a div. These tags are added to the actual DOM.
- What if we don't want them? Maybe we want to minimize the size.
- We cannot add any tags. We need tags because from a component, we cannot return multiple elements.
- Because we cannot return multiple elements, we wrap them inside another element.
- The solution is fragment. <> </>
- This looks like a tag, but it's not a real DOM tag. This thing is only added to the virtual DOM, not seen in th real dom. The size of the real dom is reduced. We did something to optimize our code.
- Fragments cannot take any attributes.

# For assignments:
- Open this link and fork it - https://github.com/geeksterin/ReactCurriculum
- React Interview Questions - https://github.com/sudheerj/reactjs-interview-questions