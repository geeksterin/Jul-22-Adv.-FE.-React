# Aug-18, 2022

## DOM (Contd...)

### querySelector()
- This is for complex senarios where we cannot use default methods (the other ones).
- This is our backup plan.
- This method takes in a CSS query.
- That means, if we are using an ID, we need to give # symbol and if we are using classes, we need to give . symbol.
- For attrbutes, we use [].
- This is used specially when we have some sort of combinator in selection. 


### querySelectorAll()
- This is pretty mich same as querySelector, but this returns a list of elements.
- Same usecase as querySelector. This is also a backup option when nothing else is possble, we should use this.

### Further Reading -> https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes


### Difference b/w HTML Collection and Node List.
- HTML Collection is an object by it's nature.
- NodeList is like an Array by it's nature. (We cannot use some of the array methods like push or pop).
- HTMLCollection is a live object, that means if we change something, this object will also change.
- NodeList is more like a static list, that means, if we change something, we need to get the list again. The original list will not change.
- If anything changes on the DOM, the HTMLCollection live object will reflect that automatically whereas for NodeList, we need to write document.... again, we need to prepare the list again to get the updated data.


### document.createElement()
- This is used to create a new Element in the memory.
- This is not yet added to the DOM tree.
- This is still in memory.
- In this method, we pass whichever tag we want to create as an argument. It returns an object reference of that element.

### <element>.appendChild()
- This is used to append a child to whichever element is called upon this method.
- parent_element.appendChild(child_element)
- The child element is the one we just created using document.createElement();

### innerText & innerHTML
- This allows changing of text an element.
- innerText will allow change of only Text content. If we pass HTML, it will not render it, instead it will show that HTML on the screen.
- innerHTML on the other hand, will actually try to render it. It can be any tag, innerHTML will try to load it and show it.
- innerHTML is kind of less secure for that reason, so most of the times, innerText is preferred, until and unless there is a very important NEED to have parsing, only then we will use innerHTML.


**In JS, hyphen (-) is not allowed in variable names.**

### element.style
- This is used to give style to any element.
- This gives inline styling, which means this JS style has the highest priority and overrides everthing else.
- The style property is a object which further contains each individual style property.
- Example: element.style.color = "blue".
- The property name are different than what we typically use in CSS, the difference is in the casing.
- Here, we use camelCasing whereas in CSS, we use kebab-casing.

### Casing - (General Concept)
- lowercase -> All characters in lower.
- UPPERCASE -> All characters in upper.
- camelCase -> First letter of every word is capital, (except for the first word). - Typically used for function names. - querySelectorAll, createElement, getElementById, forEach, etc. etc.
- PascalCase -> First letter of every word is capital, including the first word. - Typically used for class names. -> Number, 
- kebab-case -> Everything is small, words are separated by - Typically used for class names and properties in CSS. - background-color, font-size, border-radius.
- snake_case -> Everything lower, words separated by _. Typically used for variable names in JS.
- UPPER_SNAKE_CASE -> Everything upper, words separated by _. Typically used for constants. - MIN_VALUE, MAX_VALUE.



# Task:
- Attempt the task #2 given yesterday.
