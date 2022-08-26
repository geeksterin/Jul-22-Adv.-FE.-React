# Aug-24, 2022

# ReactJS
- It is a frontend library.
- frontend -> For the clients (web browsers).
- libray - A set of code written (classes and functions bundled together to make your work as a developer easy).
- React makes development faster (compared to usual vanilla development).
- ReactJS is the top most package that is being used.
- Because it is most popular, the developer community is big.
- That means, if a new person wants to learn react, many many many resources are there.
- React is by Facebook. That means, it is backed up by a big company.
- Future is safe. (React is going to Stay) It is actively maintained.
- It is opensource - https://github.com/facebook/react
- React is super popular.


## Library vs Framework
- React (Libeary) vs Angular (Framework)
- Library is small in size.
- Framework is big in size.
- React is faster compared with Angular and other frameworks.
- In a framework, many things are built in.
- In a library, it only contains the basics.
  - Example:
    - In React, API calls are not there, we import and axios. There is no routing by default, we need to use react-router.
    - In Angualar, all these things are built-in.
- Libraries only contains the bare minimum that you need to get started. Anything extra, you need to install separately.

## NodeJS
- NodeJS is a software used to run JS outside of the browser.
- React supports JSX. (JavaScript XML)
- Browsers don't support it.
- There is a package called as babel which acts as a transpiler (convertor).
- This converts the JSX into JS + HTML + CSS.
- This babel runs on nodeJS.

**NodeJS is not a requirement, there is a way using which we can create node appications without having NodeJS installed. That way is called CDN.**

**ReactJS and ReactNative are two DIFFERENT things. ReactJS is for websites whereas React Native is for Mobile Applications.**

## Getting Started with a react application.
- We ~need~ want node JS. (Download Version 16).
- https://nodejs.org/en/
- After nodeJS is installed, we create a new folder.
- Then we execute a command -> npx create-react-app demo.

**There is an alternate to npm, called yarn.**

# Directory Structure
- The overview of directory structure created by the CRA command.
- <project_name>
  - node_modules - This is a directory which contains all the modules/packages that we are using. This is a really big directory, we never share it. These packages are imporant for better execution / development of the React Application.
  - public - This directory contains things that are to be shown to the public.
    - favicon - This is the icon shown next to the title.
    - index.html - This is the main file.
    - logo - This is the logo file which we might use.
    - manifest.json - More like a metadata for the website.
    - robots.txt - For SEO.
  - src - This contains the source code. Whatever we customize is going to be inside this.
  - .gitignore - This is for git and github. Basically, it tells which files to ignore.
  - package.json - This contains information about project as well as packages used the project.
  - package-lock.json - This is extended version of package.json
  - README.md - This is a markdown file, used for documentation  For humans to read.

# Task:
- Create a react app and in the HTML part of App.js, change it to like an intro for a restaurant website.