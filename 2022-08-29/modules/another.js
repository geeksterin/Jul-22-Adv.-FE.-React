const fn = () => {
  console.log("This is a function");
}

const fn2 = () => {
  console.log("This is another function");
}

export default fn;
// export default fn2; //This is not allowed, duplicate default... Syntax Error.

const hello = () => {
  console.log("Hello from another");
}