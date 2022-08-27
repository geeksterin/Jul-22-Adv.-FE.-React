# Aug-29, 2022

# JSX
- Javascript + XML
- JavaScriptXML
- Usage of JS and XML in a single file.
- This allows the use of HTML inside JS.
- Purpose is to make easy development of websites.
- Makes development faster.

**We can create React Applications WITHOUT JSX.**
- Example:
   - React.createElement('div', null, 'Hello World');
   - ReactDOM.createRoot(document.blahblahblah);


## NPX
- Node Package Executor
- This is used to execute any JS package.
- We install using npm and execute/run the package using npx.


## create-react-app
- CRA is a third party package built by facebook.
- Executing this package will create the directory structure.
- We don't need this package, we can create the same directory structure on our own.
- But, using this package is going to be helpful. It saves time and reduces efforts.


**Note: The website used to manage packages is npmjs. It is like a telephone directory but for node packages.**


## Modules (import, export)
- This is for Modular Programming Paradigm.
- This is used for better security.
- In a certain file, we can have multiple functions/classes/variables/etc. Out of which we might want to share only a few.
- In that case, we only export those few things.
- Similarly, instead of everything being avilable, we import what we need. So, we don't import unnecesarily.
- Released somewhere between ES6 and ES9.
- Here, 1 single file is considered as 1 single module.

### Two ways to import/export.

## Default Export/Import
- This will export any variable/constant/function/object/etc.
- The restriction is, 1 file can have only 1 default export.
- The syntaxt is to tell which export is default:
  - exmport default <variable_name>;
- A single file can have 0 or 1 default exports. Nothing else.
- To import a default export, we just use `import <name> from "filename";`
- This name can be anything.
- The reason we can give any name during import is that we are using default import. Now, from a single file, there can only be a single default export, therefore, when we import, JS will automatically map the custom name to the exported function.

## Named Export/Import
- This is the second approach.
- There can be multiple named export from a single file.
- There are multiple ways to export.
  - Approach 1 - During the variable declaration, give export keyword.
  - Approach 2 - Create an an object and export it directly. `export {fn1, fn2, fn3}`.
- If we export a thousand things, it is possible to just import 1 of them.
- In a named import, we can use `import {} from "file.js"`.
- In 1 single line, we can have multiple imports. In fact, we can also combine default import and named imports in a single line of code.
- In order to rename the imported refrence, we use the keyword `as`.
- Example `import {originalName as customName} from "./file.js"`.

**Note: In Vanilla JS, we give the filename with .js extension. In React, this is not mandatory.**
**Note: To use modules in Vanilla, we need to give type="module" when adding th4 script tag.** 


**In any way, we cannot export a single function twice.**



## Assignment:
- Create modules for a calculator app.
- In a file, have multiple functions (add, sub, mul, div, etc).
- Export them using named export.
- In index.js, import them and perform some sample calculations.
- No nned fancy UI at this point.







## Props

## BOM
- BOM is parent of DOM.



- CDN Approach

- Event Object

## Linting / Linter

- Changing of
src / href
id
classList






### Spread Operator | Rest - Recap | 


### Destructuring


### Concatenation



# fetch
# JSON










- entries()
- hasOwnProperty()



- Interview Examples:
-- Try to have keys as not a string.


### IMPORTANT
- Object.freeze() / Object.isFrozen()
- Object.seal() / Object.isSealed()

Object.keys.forEach


## Multi dimensional arrays 

- <String>.split
### Shallow Copy | Deep Copy

### NaN

### Pure function

### async / await (callback hell)

### OOP
### getters and setters
### function declaration vs arrow functions (using this).
## this -> call/apply/bind (during OOP)
## new keyword;

## setInterval/clearInterval + setTimeout/clearTimeout

### RegEX
## Various functions of console.

## Primitive vs Non Primitive

## Object.freeze()
## string templating
## Concatenation