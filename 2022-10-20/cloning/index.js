const obj = {
  fname: "ABCD",
  lname: "XYZ",
  phone: "+91-1234",
  students: [
    "A", "B", "C", "D"
  ]
}

// const another = obj; //This is just a new reference for the same object (in the memory location).

// console.log(another, obj);

// // another.fname = "AAAA";

// // console.log(another, obj);

// const fn = (a) => {
//   a.fname = "BBBB";
// }

// fn(obj);

// console.log(another, obj);

// const str = JSON.stringify(obj);
// const another = JSON.parse(str);

const another = { ...obj };

console.log(another, obj);

another.fname = "AAAA";
another.lname = "ZZZZ";
another.students.push("E");
another.students.push("F");

console.log(another, obj);