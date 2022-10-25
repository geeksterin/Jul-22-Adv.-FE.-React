# Oct-25, 2022

**Note: useRef can only be used to access the DOM elements. Not your React Components. Trying to do so will throw a Warning (code will not crash). But the approach will not work.**

# Ref Forwarding
- When the reference object is created in the Parent and we need the there.
- But the actual element is inside the child component.
- Then we use the concept of Ref Forwarding.
- Forwarding means that we are passing the thing. We get something from someone then pass it to another.
- Componets cannot use references. We cannot have a ref pointing to a component.
- But components can act as a forwarding agent. That is, they get the ref and they forward it to an HTML element inside.
- Obviously, the passing of ref will be done just like any other prop. `<Component ref={aRef} />`.
- Regular component will just throw a warning and not accept this. In order to make this work, we wrap the component inside a function.
- We use a built in function of react. That is `forwardRef`.
- The purpose of this function is to make the forwarding of reference.
- This will allow the usage of ref as a prop and then it will forward it into the function as second parameter.
- Second parameter because this ref IS NOT A PROP.
- Then, inside the component, we can use it however we want and assign it to a element or we can pass it to another child component (note, that the second level child also should be wrapped inside forwardRef).


# Prop Drilling
- When we have some data at an ancestor and we want to send it to a descendant.
- They are NOT immediate parent/child. If the two components were immediate parent child, then this would be just a usual prop.
- But since the two components are not immediate parent/child, therefore this concept is prop drilling.
- Advantage of this is that we are able to send the data multiple level down.
- Disadvantage is that each level will have access to that data. Unnecessary access is bad.
- Also, at each level we will have to pass it as a prop to the child.
- Disadvantage, this is not maintenance friendly. That means, in order for a simple change, I need to modify multiple components.


### What is the difference between Prop Drilling and State Lifting?
- Prop Drilling is used to send the data down the hierarchy in our Component Tree.
- State lifting is used to send the data up in our component tree.
- State lifting is majorly done with the help of callback functions, whereas the prop drilling can be just done directly.
- *Proceed with explaining the definitions of both.*


# Context (or Context API)
- This is a better way to send data from an ancestor to a descendant directly.
- This is better because we do not have to change the components in the middle of the tree.
- This kind of makes is more secure. (Even though the components have access, but directly as a prop we are not sending).
- Initially it is kind of difficult as compared to Prop drilling.
- In order to implement this, we use the createContext method of react. We use this to create the context object.
- This object is typically created in a separate file and exported. The reason is that we want to import this in the components we will be using.
- A context has two parts. Provider and Consumer.
  - A Provider is the one which is used to send the data.
  - A Consumer is the one which is used to consume the data (read the data).
  - A single context can have only 1 provider, but can have multiple consumers.
- When creating a provider, we just import the Context and use it's `.Provider` property.
- This provider is a Higher Order component and we pass the children inside this.
- The children and their whole tree can have access to the data of this context.
- In order to use it, there are 2 main approaches.
  - Use the context's `.Consumer` component.
    - In this approach, we have the higher order component and inside we pass a callback as a child.
    - This callback will have a parameter which will be the value of the context.
  - With the help of `useContext` hook.
    - We import the hook from react. (This is a nemed export).
    - Then we call this function and pass the context inside it.
    - This function returns the value of that context.
- In the provider, the data is sent as a value prop. The prop name has to be `value`. Data can be anything, it can be primitive, non primite or even functions. (Thanks for First Class Functions).
- A react application can have many contexts.









## Redux




## Controlled and Uncontrolled Com  ponents
## Data Binding




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




# Code Splitting / Code Chunking / Bundling / Suspense



## REST API
- Different methods
- HTTP status codes


### GEC




// [] == []
// [] == ![]
// [] !== []






### IMPORTANT
- Object.freeze() / Object.isFrozen()
- Object.seal() / Object.isSealed()


- CDN Approach

## Linting / Linter

- Changing of
src / href
id


- entries()
- hasOwnProperty()





Object.keys.forEach


## Multi dimensional arrays 




### RegEX






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