# Sep-13

# Further Reading - ARIA
- This is for Accessibility
- Accessible Rich Internet Application

# Doubts
- In promise situation, we use a queue called as Micro Task Queue.
- For setTimeout / setinterval / requestAnimationFrame / etc, we use Macro Task Queue.

for(var i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000)
};

## Conditional Rendering
- To render a component/element based on certain conditions.
- Conditionally we are deciding whether to show it or hide it.
- This uses a ternary condition.
- In react we don't use if/else.
- ternary -> <condition>?(<true_situation>):(<false_situation>)


*=== is strict comparison operator, it checks the value as well as the data type.*
- React always expects strict comparison.
*Recap - In React, to give classes, we don't use the attribute class, instead we use className attribute.*


## Unit of measurement

### pixel (px)
- This is an absolute unit.
- 1 pixel is the tiniest dot that can be controlled individually by a display.
- 1 pixel can vary from device to device. For this reason, using pixel as units is not recommended because it is not responsive.
- At the end of the day, everything is converted into pixels, but we should not write the unit directly into our CSS.
- Instead of that, we should use REM and EM.

### rem (Root Em)
- This is pointing to font-sze of the html tag.
- This is important because when the user is using zoom functionality. Then the browser will set the font-size of html tag. (By default, that is 16px).
- Therefore, our measurements can depend on that, therefore it makes the design more responsive.

# Emojee Search Application - Contd.
- Implemented the CSS
- Implemented the filter logic, using useEffect.
- Implemented code organization by separating various components.