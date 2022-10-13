# Oct-11, 2022

### Recap - Path Parameters
- The data that user sends as part of the Path of the URL.
- Here, the URL condains only the data.
- Example - github.com/aayusharyan
- This looks much cleaner and kind of profession.

# Query Parameters
- These are used for search and filter logic.
- Example 
  - https://www.amazon.in/s?k=mobiles&crid=3IZGWTMDSEKO0&sprefix=mobile%2Caps%2C287&ref=nb_sb_noss_2
  - https://www.google.com/search?q=mobiles&sxsrf=ALiCzsYOlnK_WgGYu9jHxctt058PXaPbtA%3A1665501420996&source=hp&ei=7IhFY-fPOaPgseMPla-OuA0&iflsig=AJiK0e8AAAAAY0WW_BWkIB7B94dKDGStjNWum8YL_ZFo&ved=0ahUKEwjn9cWkvNj6AhUjcGwGHZWXA9cQ4dUDCAc&uact=5&oq=mobiles&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMggIABCABBCxAzILCAAQgAQQsQMQyQMyCAgAEIAEELEDMggIABCABBCxAzILCAAQgAQQsQMQgwEyBQgAEIAEMggIABCABBCxAzIFCAAQgAQyBQgAEIAEOgQIIxAnOggILhCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAELEDEIMBOgsILhCABBCxAxCDAToICAAQgAQQyQM6DgguEIAEELEDEIMBENQCUABY5gtg1QxoAHAAeACAAcYBiAHZB5IBAzEuNpgBAKABAQ&sclient=gws-wiz
  - https://www.flipkart.com/search?q=laptop&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off
- We can have dynamic kind of query parameters without much change to the code.
- The sequence of query parameters does not matter
- Query parameters will have key value pairs.
- Query parameters will start with a ?
- They are key value pairs, (Just like an object), each pair is separated using &
- <key>=<value>
- ?key1=value1&key2=value2&key3=value3

**Note: Commonly to implement key for the query parameter search, we use q. This is short for query, which means to request information.**



## useSearchParams hook
- This hook is part of react-router-dom
- This allows access to query parameters.
- This is a named export.
- To initialize this, we will receive 2 things, the parameters and the set parameters method.

## .has()
- This method is used to check whether the key exists in the query parmeter list or not.
- It is because the query prameters can be dynamic so they might or they might not have a particular key. Therefore, we need to check.
- This method accepts the string of the key that we want to check and returns a boolean.

## .get()
- This method returs the data back from URL.
- This will always return a string data type.
- This method takes in the key to search.



# MUI
- This is a design framework.
- MUI is built for react whereas Material Design is a general concept developed by Google.
- In MUI, every thing is a component, we need to import it and use it.
- Responsiveness is built in, so we don't have to worry about it.
- We typically try to avoid the vanilla html tags, instead, we use the MUI Components.


### MUI Typography
- This is for text purposes.
- We use variant to tell which font tht is (h1-h6, p, heading).

### MUI Card
- This is a card component, this already has the elevation and shadow attached to it.

### MUI Box
- This is an alternate to the div.

### MUI Stack
- This is an alternate to the flex that we use.
- We can have a spacing property, that is alternate to the CSS gap property that we give.

*Each key is assigned a key code, the key code of Enter is 13.*

**In react, we do not use class for the class name, we use the attribute, classList. In that, we can use string or multiple classes in a single string separated by space, or even we can use condition rendering with the help of string templating/template literals.**


# Cinematic Project
- Implement Search functionality.
- Show Results in a list of cards.