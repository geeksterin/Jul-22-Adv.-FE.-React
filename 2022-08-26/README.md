# Aug-26, 2022

**Note - Just like we have index.html for regular pages, for react application, the first file that needs to run should be App.js.**
**App.js is the index.html for React Applications.**
*We can customize the name and change it to anything instead of App.js. But we should not do it.*

## Details of src directory
  - App.css - This is the CSS for App component. That means, whatever HTML we write in App can access this CSS, outside of that, other components cannot access.
  - App.js - This is a component. This is the first component that is used in any react application.
  - App.test.js - This is a sample testcase that is for the basic react webpage which is developed.
  - index.css - This contains the whole CSS for your website. If we write any CSS code here, it will be avialble throughout the whole website.
  - index.js - This contains the whole JS for your website. This also contains the initialization code for React.
  - logo.svg - This is react's logo. Which we see rotating on our default React application.
  - reportWebVitals.js - This is a feature developed by Google to check the health of any webpage.
  - setupTests.js - This is used for settting up the testcases. We typically use JEST package for testing. This is very very common.

## Package.json
- This contains information about the project that we are working on.
- This contains things like name, description, version, author, etc etc.
- This contains an object called as dependencies - This dependencies contains a collection of all the packages that we are using in our react application. All the packages that we have installed.
- Suppose, I import a package called as PackageA. It is possible that PackageA is using other packages as it's dependency, PackageAA, PackageAB, PackageAC.
- So, when I am installing packageA, indirectly I am also installing PackageAA and PackageAB and PackageAC. Total, we are installing 4 packages.
- devDependencies - This is the collection of packages which is used for development purposes. This collection of packages is never pushed to the production server. Which keeps the load comparatively light.

## Package-lock.json
- This file contains all the list of addtional (indirect) dependency installations.
- This is a very comprehensive list. (Detailed)
- We never touch this file. This is created by the node package manager automatically. We just use it and share with other team members.

## Hosting
- For Hosting, we will be using Netlify Service.
- https://www.netlify.com/
- This is free to use and no payment needed.
- Actual example in upcoming sessions.

## Component
- The React application can be broken down into various atomic parts. These atomic parts are called components.
- A component is a JS file. Typically a function or a class.
- This contains the HTML code along with it's relevant JS functionality and logic.
- Example, have a component with 1 button and an action for that button.
- That component contained both, HTML element and it's relevant functionality.

### What is the difference between HTML Element and a React Component?
- HTML element is the element which is part of core HTML tags.
- React Component is a function/class which contains html elements along with relevant functionalities.
- React Component contains various HTML elements.
- Example:
  - App is a Component.
  - div / header / button is an element. 
- Each component should have each separate file.
- Generally, we put all the components inside a directory called as components.
- Whatever the file name we give, that should be the function/class name. That is the component name.
- The component names have to be in PascalCasing.
- After creating the function/class, we also need to export it. Typically using export default <ComponentName>
- Whichever component needs it, it will import that in order to use.
- If any component does not want to use it. No need to import.

**Note: When starting a React application by running npm start. Make sure that you are inside the project directory. npx create-react-app <app_name> will create a new directory and put the code inside it. Make you you are inside that directory and then run npm start.**

### Casing - Recap
- Example:
MyButton - Pascal Casing
myButton - Camel Casing

## Task:
- Create a new react application.
- In that application, create some components.
  - Name - To show the name
  - Bio - To show an introduction message
  - ProfilePicture - To show dp.
  - ContactMe - To show phone number and email.
