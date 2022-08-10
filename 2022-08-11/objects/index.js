// console.log("ABCD");

// const obj = {
//   "key1": "Value1",
//   "role": "Educator",
//   first_name: "Aayush",
//   last_name: "Sinha",
//   experience: undefined,
//   123: "ABCD", //Key as a number, but JS will try to convert it and NOT Crash.
//   ["aaa"]: "Array Key" //If we don't give key as string, JS will try to convert it.
// };

// console.log(obj);


// What if, the key is a variable?
// const new_key = prompt("Enter the key you want to add");
// const new_value = prompt("Enter the new value you want to add");


// const obj = {
//   "key1": "Value1",
//   "role": "Educator",
//   first_name: "Aayush",
//   last_name: "Sinha",
//   key2: new_value, //key -> "key2", value is coming from variable new_value.
//   [new_key]: new_value, //This is a trick. Key will be whatever is in the variable new_key
//   new_key: new_value, //Key will be "new_key", value will come from the variable.
//   experience: undefined,
//   123: "ABCD", //Key as a number, but JS will try to convert it and NOT Crash.
//   ["aaa"]: "Array Key" //If we don't give key as string, JS will try to convert it.
// };

// console.log(obj);


// const obj = new Object("ABCD");
//             // new String("ABCD");
//             // new Number(1234);
// obj.k1 = 1234;
//             console.log(obj);

// const obj = new Object();
// const first_name = "ABCD";

// obj.first_name = "Aayush";
// obj.last_name = "Sinha";

// obj[first_name] = "Something"

// console.log(obj);

// //If my key was in a variable.
// const new_key = "zzzz";
// const new_value = "gggg";

// obj[new_key] = new_value;

// console.log(obj);

// const obj2 = {
//   arr: [1, 2, 3, 4],
// }

// obj2.arr.push(5);
// console.log(obj2);

// //console is an object?

// const obj3 = {
//   fn: _ => console.log("ABCD")
// }

// obj3.fn();



// const new_obj = {
//   key1: "Value 1",
//   key2: "Value 2",
//   key3: "Value 3",
//   key1: "Value 4"
// };

//If we write later, it will override.

// delete new_obj.key2;

// console.log(new_obj);

// delete this;
// console.log("ABCD");
// console.log(this);

// delete console.log;


// console.log("ABCD");


// const obj = {
//   key1: "Value 1",
//   key2: "Value 2",
//   key3: "Value 3",
//   key4: "Value 4"
// };

// console.log(obj);

// const keys_arr = Object.keys(obj);

// console.log(keys_arr);

// Just don't do it! ❌
// keys_arr.forEach(e => {
//   console.log(e, obj[e]);
// });


// We have an object and we change it to make first letter of every key as capital.
const obj = {
  key1: "Value 1",
  key2: "Value 2",
  key3: "Value 3",
  key4: "Value 4",
  abcd: "XYZ"
};

console.log(Object.values(obj));

const keys_arr = Object.keys(obj);

// console.log(keys_arr);

keys_arr.forEach(old_key => {
  const new_key = old_key[0].toUpperCase() + old_key.substring(1);

  obj[new_key] = obj[old_key];
  delete obj[old_key];
});

console.log(obj);