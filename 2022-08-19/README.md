# Aug-19, 2022

## Recap - Doubt

## Important from Interview Point of View.

const a = {};
const b = { key: 'b' }; // "[object Object]"
const c = { key: 'c' }; // "[object Object]"

// a -> {}
a[b] = 123; // a -> { [object Object] => 123 };

a[c] = 456; // a -> { [object Object] => 456 };

a["[object Object]"] = 789;

console.log(a[b]);

//a[b] -> but b is an object.
//For a to be a valid object, b has to be a string.
//If we send anything other than a string, JS will try to convert it into an string.

**Object can only have keys as string, if we give anything else, JS will try to convert it. It will convert my running toString() method.**


## Event Handlers
- Event Handlers are used to Handle an Event.

### Event
- Anything that we do on a website is an event.
- From a simple scroll on a webpage, to doing something like drag and drop, or click.
- There are like 100s of different events.
- Not all of them work on every element.

### Handler
- This is the function/logic which we use to handle if we want any custom implementation on that event.
- When th event happens. It triggers the event handler.

## Event Handlers
- Checking the common events and their situations.

### click
- This is an event when the user clicks on anything.
- User can pretty much click anywhere on the page, so this can be used almost on all the elements.
- This is a left click.

### change
- This is commonly used for all inputs.
- Change means, change of the value.
- This is triggered when the user focuses away from the input.
- This is preferred most of the times.

### keyUp
- This is also for inputs (but typing situation).
- This is triggered everytime there is a key lift.
- This is used when we need more real-time sort of approach for the inputs.
- Typically, when we want to show like search suggestions.


### submit
- This is typically for forms.
- This is used to handle logic when a form is to be submitted.
- Typical usecase, captcha validation, sending of OTP, manipulation of data (encryption, hashing).

## addEventListener
- This is a method which is used to connect a function/event listener to the element.
- This takes 2 parameters, first is the event which we are interested in, second is the callback function.
- When something happens, what to do when that happens.
- This is a clean approach.
- Prefer this if you are using vanilla approach.


**Vanilla JS is JS without any flavour, that means, no framework or library is added to this. Vanilla here is used as an adjective.**

### Further Reading:
- Read about <output></output> tag.



# Task:
1. Create a page with 2 inputs and a paragraph tag (for message) Both of them password.
- After the user enters both of them.
- If they are same, show a message "Password Match".
- Otherwise, show message "Password don't match".

2. Create a page with 2 inputs, 1 is password and another is a checkbox.
- Output (Expectations):
- If the checkbox is checked, then the password should be visible in the box.
- If the checkbox is not checked, then password should not be visible. It should be like *****.
