//Call Stack
//Microtask Queue
//Macrotask Queue

//Call Stack - Last In First Out
//Factorial of 5 = 5 * 4 * 3 * 2 * 1
// 5 * Factorial of 4
// 5 * (4 * Factorial of 3)
// 5 * (4 * (3 * factorial of 2))
// 5 * (4 * (3 * (2 * Factorial of 1)))
// 5 * 4 * 3 * 2 * 1

// const f = (num) => {
//   if(num == 1) {
//     return 1;
//   }

//   return num * f(num - 1);
// }

// const result = f(5);
// console.log(result);


// console.log("A");
// const pr = new Promise((resolve, reject) => { console.log("B"); resolve(); })
// pr.then(_ => console.log("C"));
// console.log("D");
// console.log("E");
// pr.then(_ => console.log("F"));
// console.log("G");
//ADBC
//ABDC ✅

// console.log("A");
// setTimeout(_ => console.log("B"), 0); //Macrotask Queue
// console.log("C");
//ACB ✅

console.log("A");
const pr = new Promise((res, rej) => {console.log("B"), rej(); });
setTimeout(_ => console.log("C"), 0);
pr.then(_ => console.log("D")).catch(_ => console.log("F"));
console.log("E");
//ABEDC ✅
//ABECD