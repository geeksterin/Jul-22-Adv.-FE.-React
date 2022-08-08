// Print the datatype of each element

// const arr = ["Anything", 1234, "ABCD", false, _ => {}, "another string"];

// for(let i = 0; i < arr.length; i = i + 1) {
//   if(arr[i] == "ABCD") {
//     break;
//   }
//   console.log(typeof arr[i]);
// }

// console.log("");

// // for(let element of arr) {
// //   console.log(typeof element);
// // }

// // arr.forEach((element, idx, original_arr) => {console.log(typeof element)});

// arr.forEach(e => console.log(typeof e));



// Manipulate and store square of each element of the aray.

// const numbers = [2, 3, 5, 4, 1, 7];
// const sqr_arr = [];

// numbers.forEach((element, index) => {
//   const sqr = element * element;
//   sqr_arr[index] = sqr;
// });

// console.log(numbers);
// console.log(sqr_arr);


// // const sqr_arr_map = numbers.map((element, index) => {
// //   const sqr = element * element;
// //   return sqr;
// // });

// const sqr_arr_map = numbers.map(e => e * e);

// console.log(sqr_arr_map);


// From the marks, check if any student is failing or not. Condition is less than 40.
// const marks = [45, 50, 60, 40, 70, 20, 10, 15, 8];

// const didFail = marks.some((e, idx, original_arr) => {
//   if(e < 40) {
//     return true;
//   } else {
//     return false;
//   }
// });

// const didFail = marks.some(e => e < 40);

// console.log(didFail);

// const failed_list = marks.filter(e => e < 40);

// const pass_list = marks.filter(e => e>=40 ? true : false);

// console.log(pass_list);


// const marks = [{
//   name: "Vishwesh",
//   marks: 47,
// }, {
//   name: "Shubham",
//   marks: 50
// }, {
//   name: "Vakas",
//   marks: 54
// }, {
//   name: "Ankur",
//   marks: 45
// }, {
//   name: "Renuka",
//   marks: 47
// }, {
//   name: "Aayush", 
//   marks: 10
// }];


// const pass_list = marks.filter(e => {
//   if(e.marks >= 40) {
//     return true;
//   } else {
//     return false;
//   }
// })

// console.log(pass_list);

// const first_failed_student = marks.find(e => {
//   if(e.marks < 20) {
//     return true;
//   } else {
//     return false;
//   }
// })

// console.log(first_failed_student);


// const menu = [{
//   name: "Burger",
//   price: 150
// }, {
//   name: "Pizza",
//   price: 210
// }, {
//   name: "Noodles",
//   price: 175
// }, {
//   name: "Pasta",
//   price: 250
// }];

//Get the price of noodles.

// const noodle = menu.find(e => {
//   if(e.name == "Noodles") {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(noodle);
// console.log(noodle.price);

// const budget_items = menu.filter(e => {
//   if(e.price < 200) {
//     return true;
//   } else {
//     return false;
//   }
// })
// console.log(budget_items);


//Reverse

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.reverse());
// console.log(arr);


// const num = "ABCD";
// console.log(num.reverse());


const multi_dimension = ["a", "b", "c", [1, 2, 3, ["x", "y", "z"]]];

console.log(multi_dimension[3]);

console.log(multi_dimension);

const flat = multi_dimension.flat(2);
console.log(flat);


// ["a", "b", "c", [1, 2, 3, ["x", "y", "z"]]];
// ["a", "b", "c", 1, 2, 3, ["x", "y", "z"]]; //Depth of 1
// ["a", "b", "c", 1, 2, 3, "x", "y", "z"]; //Depth of 2