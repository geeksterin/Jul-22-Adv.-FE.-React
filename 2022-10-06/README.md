# 06-Oct, 2022

## Recap of useEffect
- Use it to track a particular state or a prop change.
- We track this to have custom logic execution.
- Always useEffect will run atleast once. (Component Mounting time).
- If the dependency array is empty, then this useEffect is not triggered again. That's why this useEffect with empty dependency array is used for custom logic during mounting phase.
- For custom logic that needs to be executed during unmounting, we need to return that function.
- If We do not pass a dependency array, then use effect does not know which state to track. Then it will execute the logic on ALL re-renderings. Which can potentially lead to an inifinite render loop.
- Another thing we should not typically do is use the same state as tracking in the dependency array which we are actually changing from the callback logic.

# Router
- This allows routing. (Navigation between multiple pages of the site).
- This allows dynamic component change. That means, we DO NOT NEED A COMPLETE PAGE REFRESH.
- This is basically Conditional Rendering + URL Manipulation.

## SPA
- This kind of an application only has 1 page that is loaded.
- When we navigate, only the content that needs to be changed is changed, other things are remained as same.
- Other than SPA, when we navigate, whole webpage is loaded again.
- React is SPA.
- Full Form - Single Page Application

### AJAX
- This concept was idealised before even React was born.
- The concept says that the part of a page which needs to be changed, only that part is loaded and changed.
- Asynchronous JavaScript and XML.

### MPA
- Regular websites which load the whole html for different pages. Those are MPA
- Example - Nasa
- Full Form - Multi Page Application

**Note: Since we are working with websites, we NEED to install the dom wrapper of react router. This package is known as react-router-dom.**

React -> Websites + Native (Mobile Applications)
Router -> DOM  + Native
- react-router-dom - This is what we need for websites. ✔️
- react-router-native
- Common part is react-router. (Core)

## Router Setup
- Run npm i react-router-dom
- Need to wrap the App component inside <BrowserRouter>
- Whereever we want to add the conditions, (typically App.js), we use Route and inside Routes, we use singular Route.
- <Routes></Routes> is a named export from react-router-dom.
- <Route /> is also named export.
- Route needs to have 2 attributes (props):
  - path - Which path to check for this route. Note, paths start with a `/`.
  - element - When the user is on that path, which Element/Component to Show.
- This is used to control the rendering part. Apart from that, we also need the navigation part.
- We CANNOT use anchor tags because their purpose is to navigate the browser and load the whole content again.
- Instead, we use a Link component. This component is also a named export of react-router dom. And this component only takes 1 attribute.
  - to - In this attribute, we define the path where we want to take the user to.
- Even though it is a Link component, at the DOM level, it is converted to an anchor tag only. The functionality is changed using preventDefault, but tag is still <a>.
- If any component is written outisde of <Routes></Routes> then that component will ALWAYS be shown.


### Path
- The part the URL which is written after the website name.
- Example - `https://geekster.in/full-stack-web-development-program`
- Path is `/full-stack-web-development-program`
- If there is no path, example `https://geekster.in/`. Here, the path is just `/`.



## Assignment:
- Create a React Application with router.
- In this app, make it like a portfolio website.
- Pick any 4-5 movies and create 1 component for each movie and have a navigation bar which shows all the movies (Poster, Name, Description, Cast information, etc.).
- Then when we click on any one movie, then show that particular component and show that movie information.
