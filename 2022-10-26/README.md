# Oct-26, 2022

# Redux
- This is a global state manager (state container).
- The purpose of Redux is to make state management easy.
- Alternatives: MobX, Flux (Discontinud), Recoil.
- This is by Facebook.
- This is better than Context API, but only for complicated applications.
- For simple applications, context API is better (or even Prop drilling),
- In Context API, one provider can have only 1 data. If that data changed, then any consumer will have to re-render. In Redux, we can specify a component to track (observe) a part of the state. That means, only the observers which are observing that particular part of state will re-render. This would save processing because unlike context API, all the components don't need to re-render.
- This creates a state object which can be observed by any component in the application.

- We used to use a wrapper for react-redux. Now we use a wrapper for redux-toolkit.

- Redux is like a global state which is available to complete react application.
- Any component in the app can read the data.
- But to prevent from writing, we have reducers.
- A component cannot directly write data onto the redux store.
- *Redux store is the technical term instead of redux state.*
- Instead of directly writing, the component calls the reducer.
- To do that, we need to dispatch the action.

## Parts of Redux
- Store - This is the global object. This is a complicated object.
- Reducers - These are the functions which have the logic of updating the store.
- Action - These are objects which are passed to the reducers.
- View - This is same as useSelectors which is used to read the data (view the data).

*Actions and Reducers are kind of like event and eventListeners. This is a very loose definition, DO NOT USE this in an interview.*

**Note: We can use Redux without React.**

- In terms of difficulty of implementation.
  - Easiest - Prop Drilling
  - Medium - Context API
  - More than Medium - Redux

- We will use 2 packages, redux nd redux-toolkit.
  - Redux is the core.
  - Redux toolkit is a react wrapper. Making it easy to work with redux in react applications.

- Installation:
  - npm install @reduxjs/toolkit
  - npm install redux
  - npm install react-redux

- Reference: https://redux-toolkit.js.org/introduction/getting-started

### Appraoch
1. Install the three packages. (redux toolkit, redux, react-redux)
2. Create a slice.
  - In that slice, we use the createSlice method. That is imported from reduxtoolkit.
  - In the createSlice method, we pass an object. That object contains 3 things.
    - name: Name of the slice.
    - initialSate: The default value of this part of the store.
    - reducers: The object containing functions which can update the store.
    - the reducer functions can accept 2 parameters.
      - initialState - The original state.
      - action - This we use only when we are passing any data to it. To get the data, we use action.payload.
  - From the file, export the actions and reducer.
    - Actions is typically done in named export.
    - Reducer is udually done as a default export.
3. Move to index.js.
  - Import configureStore method (named export) from reduxJS/toolkit.
  - call this function and pass an object with key as reducers and the value of the reducer which we exported. (Obviously, we need to import that reducer here as well).
  - **Note: if we have multiple slices, then the reducers needs to be an object.**
  - Import Provider from 'react-redux'. (Named export)
  - Wrap the App component inside the Provider HOC.
  - Pass store as a prop to the Provider `<Provider store={<store_variable>}<App /></Provider>`.
4. At this point, the setup of Redux is completed. Whole application will have access to the Redux store.

### Writing to Redux Store
- We need to import a hook, `useDispatch` from `react-redux`.
- This we call the function and get dispatch from it.
- Then we import the action that we need to call. Then we pass it as a function inside the dispatch.
- Example `dispatch(increment());`, `dispatch(setValue(data))`.
- If we need to send the payload as well, then we can pass that as an argument inside the action function call.
- Done. Now, react-redux will handle the reducer calls and updation of the store.

### Reading from Redux Store
- Here, we use another hook, `useSelector` from `react-redux`. (Named export).
- This will observe the redux state. If we want to observe any part of that state. Then we can pass a callback here and return that part only.
- Example: `useSelector(state => state.text)`. Here, text is a key inside the state object.
- This returns an observable data which we can then use in our component.
- Only when the text key of our state changes, then the component will be re-rendered. Otherwise, no re-rendering. 


# Assignment
- Create a Counter application.
- AppJS -> Comp1 & CompA.
- App.JS has the display of span tag.
- Comp1 -> Comp2
- CompA -> CompB
- Comp2 has a the button of increment.
- CompB has the button of decrement.
- Use Redux.















## Controlled and Uncontrolled Components
## Data Binding
## Code Splitting / Code Chunking / Bundling / Suspense
## Constant object manipulation
- Object.freeze() / Object.isFrozen()
- Object.seal() / Object.isSealed()
## Additional Object methods
- entries()
- hasOwnProperty()
Object.keys.forEach
## Multi dimensional arrays 
## REST API
- Different methods
- HTTP status codes

## Using vanilla JS
- Changing of
src / href
id

## CDN Approach
## RegEX
## Linting / Linter




## Project Ideas
## IGDB
## Quote API
## Alpaca API
## Napster API
## Fake Store
## Unsplash Project
## Memory Game
## Markdown Editor
## Password Generator


### GEC

// [] == []
// [] == ![]
// [] !== []



## Lifecycle Methods (Class Components)

### OOP
### oop with this keyword.
### getters and setters
### function declaration vs arrow functions (using this).
## this -> call/apply/bind (during OOP)
## new keyword;


12. Classes
Defining a classes
Class Instantiation
Class Constructor
Default values with constructor
Class methods
Properties with initial value
getter
setter
Static method
Inheritance
Overriding methods
Exercises
Exercises Level 1
Exercises Level 2
Exercises Level 3
13 Document Object Model(DOM)