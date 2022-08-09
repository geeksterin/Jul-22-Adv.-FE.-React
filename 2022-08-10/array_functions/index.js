console.log("DEFER");


//Concat

// const arr1 = [1, 2, 3, 4];
// const arr2 = ["a", "b", "c", "d"];
// const arr3 = ["x", "y", "z"];

// // const resultant = arr1.concat(arr2);
// // const resultant = arr2.concat(arr1);

// const resultant = arr3.concat(arr1, arr2, 34);
// // const resultant = [...arr3, ...arr1, ...arr2, 34];

// console.log(resultant);
// console.log(arr2);



// Sort

// [1, 4, 5, 7, 10].sort();

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



// menu.sort((a, b) => {
//   if(a.price < b.price){
//     return -1;
//   } else if(a.price == b.price) {
//     return 0;
//   }
//   return 1;
//   // return a.price - b.price;
// });

// menu.sort((a, b) => {
//   console.log(a.price, b.price);
//   if(a.price > b.price) {
//     return 1;
//   } else if(a.price < b.price) {
//     return -1;
//   }
//   return 0;  //The elements are same.
// })

// menu.sort((a, b) => {
//   const difference = a.price - b.price;
//   return difference;
// });

// console.log(menu);

// 1 -> Swap
// -1 -> No swap (but check again)
// 0 -> No swap and never check again

// menu.sort((a, b) => {
//   console.log(a.price, b.price);
//   if(a.price > b.price) {
//     return 1;
//   }
//   return -1;
// });

// console.log("ABCD");

// menu.sort((a, b) => {
//   console.log(a.price, b.price);
//   if(a.price > b.price) {
//     return 1;
//   } else if(a.price == b.price) {
//     return 0;
//   }
//   return -1;
// });

// menu.sort((a, b) => {
//   // return a.price - b.price; //Ascending
//   return b.price - a.price; //Descending
// });
// console.log(menu);



// Fill
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const another_arr = arr.fill("ABCD");

// console.log(another_arr);
// console.log(arr);

// arr.fill("HACKED");
// console.log(arr);

// const arr = new Array(50);
// arr.fill("DATA");

// const arr = (new Array(50)).fill("DATA", 10, 15);

// console.log(arr);


// const items = [
//   { name: 'Edward', value: 21 },
//   { name: 'Sharpe', value: 37 },
//   { name: 'And', value: 45 },
//   { name: 'The', value: -12 },
//   { name: 'Magnetic', value: 13 },
//   { name: 'Zeros', value: 37 }
// ];

// items.sort((a,b) => {
//   return a.value - b.value;
// });

// console.log(items);


// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]

// const filtered_arr = products.filter(e => typeof e.price == "number");

//Calculate the total.
// let sum = 0;
// filtered_arr.forEach(e => sum = sum + e.price);

// filtered_arr.reduce((sum, e) => sum + e.price, 0);

// console.log(sum);

// filtered_arr.reduce((cumulative, element, index, original_arr) => {}, 0);

// const sum = filtered_arr.reduce((cumulative, element) => {
//   return cumulative + element.price;
// }, 0);

// const sum = filtered_arr.reduce((c, e) => c + e.price, 0);

// console.log(sum);

// const numbers = [1, 2, 3, 4, 5, 7, -10];

// //EVERY element of my array is positive?
// const are_all_positive = numbers.every((e) => {
//   if(e > 0) {
//     return true;
//   }
//   return false;
// });

// console.log(are_all_positive);


// const string = "kjhfjkshdfjkksfhsfhiwueicsbsjkc";

// //Frequency count; {a => 0, b => c};

// const fq = string.split("").reduce((c, e) => {
//   if(c[e] !== undefined) {
//     c[e] = c[e] + 1;
//   } else {
//     c[e] = 1;
//   }
//   return c;
// }, {});

// console.log(fq);

// const arr = [1, 2, 3, 4];

// arr.forEach((e) => {
//   console.log(e);
// });

// const addition = (a, b) => {
//   return a + b;
// }

// console.log(addition(10, 5));
// console.log(addition(_ => {
//   console.log("ABCD")
// }));

// const str = "The quick brown fox jumped over the lazy dog";
// let word_arr = str.split(" ");
// // console.log(word_arr);

// word_arr = word_arr.map(e => e[0].toUpperCase() + e.substring(1));
// // console.log(word_arr);
// const result = word_arr.join(" ");
// console.log(result);