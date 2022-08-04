// console.log("File is loaded");


// const generateRandomStr = function(length) {
//   let randomStr = "";
//   const characters = ["a", "b", "c", "d", "e", "f", "g"]; //Set of characters to chose from
//   while(randomStr.length < length) {
//     let random = Math.random();
//     //Math.random returns between 0 and 1. 0 is possible 1 not included.
//     random = random * characters.length;
//     const random_index = Math.floor(random);

//     const singleCharacter = characters[random_index];
//     randomStr = randomStr + singleCharacter;
//     //Pick a random character.
//   }

//   return randomStr;
// }

// console.log(generateRandomStr(12));
// console.log(generateRandomStr(12));
// console.log(generateRandomStr(12));
// console.log(generateRandomStr(12));
// console.log(generateRandomStr(12));
// console.log(generateRandomStr(12));
// console.log(generateRandomStr(12));

// let _ = 1337;
// console.log(_);


// // 0 parameters
// const helloWorld = _ => {
//   console.log("Hello World");
// }

// helloWorld();

// // 1 parameter
// const printSquare = num => {
//   const approach1 = num * num; //Multiply by itself to make square
//   const approach2 = num ** 2; //Raise to the power of 2 using ** operator
//   const approach3 = Math.pow(num, 2); //Using a Math function.
//   console.log(approach1, approach2, approach3, "ABCD");
// }

// printSquare(5);

// // More than 1 parameters
// const addition = (num1, num2) => {
//   console.log(num1 + num2);
// }

// addition(10, 5);

// //1 instruction and we will return that.

// const addition_one_liner = (num1, num2) => console.log(num1 + num2);

// addition_one_liner(30, 5);


// const generateRandomNumber = _ => Math.random();

// // console.log(generateRandomNumber());
// // First Class function, a function that has been defined to a variable.
// const helloWorld = _ => console.log("Hello World");

// //It takes 2 arguments, a function and a time (milliseconds)
// //Calls the function after the given time has passed
// setTimeout(_ => console.log("Hello World from timeout"), 4000);


// // element.addEventListener('click', () => {});


// console.log(_ => console.log("Hello World from console"));


// // Anonymous - ❌
// // Function Expression - ✔️
// // Named function - ✔️
// // HOF | FOF - FOF
// // FCF - ✔️
// // Callback function - ✔️
// const hello = function hello1() {
//   console.log("Hello from named");
// }

// setTimeout(hello, 6000);


// console.log(1, 2, 3,4 ,5 , 6, "abcd", "blah blah", 8 , 10);


// const addition = (a, b, c, d, ...others, e) => {
//   const sum = a + b + c + d;
//   console.log(sum);
//   console.log(others);
// }


// const addition = (...numbers) => {
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i = i + 1) {
//     sum = sum + numbers[i];
//   }
//   console.log(sum);
// }

// addition(10, 5, 7, 8, 5, 7, 15, 4, 1, 2, 13, 5, 100, -1000);



// const some_fn = _ => {
//   const child_fn = () => {
//     console.log("Hello Child World");
//   }

//   // child_fn();

//   return child_fn;
// }

// // const result = some_fn();
// // console.log(result);
// // result();

// const result = some_fn();
// result();


// some_fn()();


const addition = (a) => {
  const c = a;
  const second = (a) => {
    // console.log(a, b);
    console.log(a + c);
  }

  return second;
}

const result = addition(10);
// console.log(result);
result(20);

addition(5)(10);