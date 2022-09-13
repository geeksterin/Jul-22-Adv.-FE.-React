# Sep-12

# API
- Application Programming Interface.
- This is a generic term.
- This is an interface (like a bridge 🌉) for communication between two pieces of software (two pieces of code).
- This is used for data exchange between those softwares.
- It is NOT Always backend/frontend API. It (The two pieces of code) can be on the same machine, like Browser APIs. They can be both on different servers.

## Project - Emojee - Emoji search application in ReactJS
- This project does NOT involve REST API calls.
- The data we will already be having.
- Initially, we will have a a list of emojis, we will show that.
- There will be an input field, which the user can type anything.
- based on what user has typed, we will filter the result and show the list.
- For data, we will use this - https://raw.githubusercontent.com/aayusharyan/emojee/main/emojiList.js

## useEffect
- This is a built in hook. Built into react. We need to import this in order to use it. This is a named export.
- This is a hook (function) which accepts 2 things.
  - Callback function.
  - Dependency array.
- If anything from that dependency array is changed, then it will call that callback function.
- Usage - If we want to execute some certain funcction if the state value changes.
- The state can be our created state (using useState) or it can also be an imported state from another hook.
- This is used to implement side Effect.
- Side effect is the functionality that we implement which is not the CORE effect.

**Hooks were introduced in React 16.8.**