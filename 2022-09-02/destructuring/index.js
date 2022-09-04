console.log("Loaded");


const arr = ["one", "two", "three", "four"];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];

const [e, f, g, h] = arr;

const [i, j, k, l, m, n] = arr;

const [o, p, ...q] = arr;
console.log(q);


let num1 = 10;
let num2 = 20;
// Swapping of two numbers
[num2, num1] = [num1, num2];


const details = {
  "fname": "Aayush",
  "lname": "Sinha",
  "role": "Educator"
};

const {fname, lname, role} = details;
console.log(fname, lname, role);

// Here, fname, lname and role are keys. NOT VARIABLES. Variables are x, y, z
const {"role": z, "fname": x, "lname": y} = details;

console.log(x, y, z);

const {"fname": aa, ...abcd} = details;
console.log(aa);
console.log(abcd);


const arr2 = ["three", "six", "nine", "seven"];
const [n1, n2, n3, n4, ...n5] = arr2;
console.log(n5);
// [] ✔️
// undefined ❌
// [undefined] ❌

//This is rest
const add = (...nums) => {
  const total = nums.reduce((c, e) => c + e, 0);
  console.log(total);
}

add(5, 10);
add(1, 2, 3, 4, 5, 6,7 ,8 ,9, 10);

const arr3 = [1, 2, 3, 4];
const arr4 = [7, 8, 9, 10];

//This is spread
const arr5 = [...arr3, 5, 6, ...arr4];
const arr6 = [arr3, 5, 6, arr4];

console.log(arr5);
console.log(arr6);

// console.log(arr3);
// console.log(arr4);
// console.log(arr5);

const info = {
  institute: "Geekster",
  batch: "Jul-22 Adv",
  ...details
}

console.log(info);

const str1 = "Hello";
const str2 = "World";

console.log(str1 + " " + str2);
// console.log(arr3 + arr4);
console.log(arr3.concat(arr4)); //Concat Method Approach. More optimized
console.log([...arr3, ...arr4]); //Spread Approach

//Concatenation of objects without spread.
const another = {institute: "Geekster", batch: "Jul-22 Adv"};

const combined = Object.assign(another, details);
console.log(combined);