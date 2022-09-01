# Aug-31, 2022

## npm install
- This command is used to install packages.
- Here, installation does not mean execution of anything, it simply means downloading the package from their origin and saving it in node_modules.
- If we want to install a particular package, we give the package name.
- Example: `npm install axios`
- This will download axios package and put it inside node_modules. Also, this will add it to package.json file.
- If I am sharing my code with someone else. I do not share node modules.
- Then, the other person will run the command `npm install`.
- Just running like this will install all the packages mentioned inside package.json.
- If we run `npm install axios --global`. This will install axios to my computer's C colon's node_modules. Otherwise, it is installed on a per-project basis.

**We are using functional components upto now.**

## Semantic HTML Tags
- These are the tags which have a certain meaning associated.
- From a technical point of view, they are just regular container tags.
- For example, insted of using div tag everywhere, we can use a meaningful thing.
- header, nav, section, footer, aside, content, etc etc etc.
- This was an introduction in HTML5.

### Semantic
- Meaningful
- Example, I have a list of students.
- const a ❌
- const data ❌
- const student_arr ✔️

**Assets directory contains all the assets being used by your website, such as images, logos, music, videos, fonts, etc etc.**

### Attaching Images in a Component.
- The image should be inside the src directory. Recommended is inside assets directory inside src.
- We can just import and use it directly.
- This import is a default import.
- Once imported, we can use it as src of the img tag.

**Note: When using images, give alt attribute and make it meaningful, do not include the terms such as picture, image, photo, etc. Otherwise react will throw warning and will have trouble in hosting.**

## Variables in CSS:
- This is part of vanilla CSS.
- The purpose is that we define once and use it everywhere multiple times.
- Example:
```
:root {
  --light: #F8F9FA;
  --dark: #212529;
  --medium: #6C757D;
}
```
- First, we give the scope where we want the variable to be available.
- Second, inside that block, we create the actual variable.
- Variable names follow kebab case.
- Another thing, variable names start with --.
- Variables can contain any value (Example: Color, measurements, percentages, properties, etc etc).
- To use a variable, we use `var(--<variable_name>)`;
- THIS IS NOT SCSS!

**When hosting online, make sure that there are no warnings. Othrerwise, it will not host.**

## Create a simple Portfolio/Profile website using React
- Color Palette - https://coolors.co/palette/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529
- https://fonts.google.com/specimen/Mukta
- Final URL - https://heroic-custard-d89f39.netlify.app/

## Assignment - 
- To make sure that your homepage is live and deployed online and available to the internet.
