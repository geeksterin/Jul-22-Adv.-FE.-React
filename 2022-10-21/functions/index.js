
//This is fine because it will give same result every time.
// const a = (num1, num2) => {
//   const sum = num1 + num2;
//   return sum;
// }

// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));



//This is not a pure function
//This is not fine because there is randomness involved.
// const a = (num1, num2) => {
//   const sum = num1 + num2 + Math.random();
//   return sum;
// }

// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));


//This is not a pure function because it depends on data outside of the function.
// let temp = 10;
// const a = (num1, num2) => {
//   temp = num1 + num2 + temp;
//   return temp;
// }

// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));

//Here, the function has a side effect of changing the original data which is being passed to it.
// const fn = (arr) => {
//   arr.push("New element");
//   return arr.length;
// } 

// const arr1 = [1, 2, 3, 4, 5];
// console.log(fn(arr1));
// console.log(arr1);

//This is satisfying condition 3.
//This is a pure function.
// const fn = (arr) => {
//   const new_arr = [ ...arr ]
//   new_arr.push("New element");
//   return new_arr.length;
// } 

// let arr1 = [1, 2, 3, 4, 5];
// console.log(fn(arr1));
// console.log(fn(arr1));
// console.log(fn(arr1));
// console.log(fn(arr1));
// console.log(fn(arr1));
// console.log(fn(arr1));
// console.log(fn(arr1));
// console.log(fn(arr1));
// console.log(fn(arr1));


// console.log(arr1);


//Not a pure function, breaking condition 2.
// const arr = [1, 2, 3, 4, 5];

// const fn2 = _ => {
//   return arr.length;
// }

// console.log(fn());


//Breaking first condition as this will return different data depending on the date and time of execution.
//This is not a pure function.
// const fn3 = _ => {
//   const today = new Date();
//   return today.getTime();
// }

// console.log(fn3());

//This is a pure function
// const fn4 = (arr1, arr2) => {
//   arr1 = arr1.concat(arr2); //This is equivalent to creating a deep clone with the concatenation
//   console.log(arr1);
// }

// const first = [1, 2, 3, 4];
// const second = [5, 6, 7, 8];

// fn4(first, second);
// fn4(first, second);
// fn4(first, second);
// fn4(first, second);
// fn4(first, second);
// fn4(first, second);

// console.log(first, second);


console.log("This is a log message");
console.error("This is a error message");
console.warn("This is a warn message");

const arr = ["Imran", "Shivam", "Bhuvan", "Arun", "Anil", "Sai"];

console.table(arr);

const obj = {
  fname: "ABCD",
  lname: "XYZ",
  phone: "+91-1234"
}

console.table(obj);

console.count();
console.count();
console.count();
console.count();
console.count();

console.dir(obj);

console.log("%cStop %cHere!", "color: red; font-size: 5rem", "color: yellow; font-size: 5rem");