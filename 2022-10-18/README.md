# Oct-18, 2022

*Session storage is just storage of data which gets deleted when the tab is closed (this is a volatile storage).*

## Cinematic
- Infinite scroll
- Footer
- Hosting

# High Order Components / Higher Order Component / HOC
- These components can accept or return (or both) another component.
- We can send any component as a child to another component, then that another component is said to be an HOC.
- This is very similar to a Higher Order Function. There, we used to deal will functions being passed as an arguments. Here, we deal with components being passed like that.
- We can just see the tag of that Component and say, if the tag is a paired tag, then it is higher order component. Otherwise (self-closing), it is a first order component.
- For example, Box, Card, Stack, etc etc from Mui.
- HTML elements like div, p, h3, h2, etc etc. are not considered as HOC, because they are not even Components.

## First Order Components
- Any component which is not an HOC is a First Order Component.
- This component cannot accept any chidren.
- We are not sending any childeren to it. Even if we send, it will ignore because the logic of handling these children is not implemented.

- Examples done inside hoc directory.

*Most of the Self Closing Tags are First Order Components, but not all of them, because it is possible that the Component is a Higher Order Component, but written in Self-Closing (It does not make sense practically, but technically it is possible).*

**Note: Children and Props are different, do not confuse between them. Props are sent as a attributes in the opening tag whereas children are sent between the opening and the closing tags.**

# Creating a Custom Hook
- Hooks are additional functions that give superpowers to our application.
- These are said to be hooks because they kind of use state and hook into the lifecycle of the components.
- We can create our own hooks for various functionalities.
- Example - To check whether the internet is prsent or not.
- End of the day, everything is going back to the implementation of state only. Because state is the only observable. (If a state changes, we will know. That is not possible anywhere else). 
- Hooks can depend on another hooks, it is okay.

# Assignment:
- Implement this internet online/offline functionality in the cinematic project.
- If the user goes offline, instead of should the particular component, show like a broken cloud image and say no internet.
