# Oct-17, 2022

### Cinematic Project
- Fix a bit of Design.
- Use Local storage
  - npm i use-local-storage
- For additional UI - npm install @mui/lab @mui/material


## Local Storage
- Typically the React application's state is volatile.
- Meaning, when we refresh the tab, the state is reset that time.
- This is not only component state, even redux state is removed.
- Because all the react states are in RAM memory.
- Local Storage is the opposite of that.
- Here, the data is persistent.
- Persistant means that the data will stay, even after refreshing or closing the browser and opening again.
- Because, the local storage data is stored on the hard disk. If might feel that the data is stored in the RAM memory, but in reality, it is in the Hard disk.
- The data is stored like a key value pair.
- The value is string.
- This functionality is provided by the Browsers via the Web API.
- In order to see the Local Storage, we can head over to the Application tab and then on the left hand pane, we will find the local storage. Which will contain a list of all the domains which have created local storage items.
- Local Storage is per website. So, if I have multiple tabs opened for the same website, all of them will have access to the data.

*If we are using JS inside JS directly, then we do not need to wrap it inside the curly brackets {}. However, if the JS is inside the JSX. Then we need to wrap the inner JS with curly brackets {}. To add JSX without any load to the DOM, we just use Fragments, <></>*
