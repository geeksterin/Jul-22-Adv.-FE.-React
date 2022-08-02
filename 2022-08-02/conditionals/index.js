console.log("👋🏻");

const num = 103;

// if(num > 500) {
//   console.log("Number is greater than 500");
// } else {
//   console.log("Number is not greater than 500"); //A ✔️
//   // console.log("Number is less than 500.");    //B ❌
// }

// {
//   console.log("Just like that");
// }


// percentage is more than 85%, then distinction
// more than 75% is first class.
// more than 60% is second class.
// more than 40% is pass.
// fail.

const percent = 87;

//Ladder
// if(percent > 85) {
//   console.log("Distinction");
// } else if(percent > 75) {
//   console.log("First class");
// } else if(percent > 60) {
//   console.log("Second class");
// } else if(percent > 40) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }

// Nesting
// if(percent > 85) {
//   console.log("Distinction");
// } else {
//   if(percent > 75){
//     console.log("First Class");
//   } else {
//     if(percent > 60) {
//       console.log("Second class");
//     } else {
//       if(percent > 40) {
//         console.log("Pass");
//       } else {
//         console.log("Fail");
//       }
//     }
//   }
// }

// if(percent > 40)
//   console.log("Pass");
// else
//   console.log("Fail");


// if(percent > 85) {
//   console.log("Distinction");
// } else if(percent > 75){
//   console.log("First Class");
// } else if(percent > 60) {
//   console.log("Second class");
// } else if(percent > 40) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }

// if(percent > 40) console.log("Pass");
// else console.log("Fail");

//This will not work,
//if(percent > 40) console.log("Pass") else console.log("Fail");

//Instead

// (percent > 40) ? console.log("Pass") : console.log("Fail");


// percentage is more than 85%, then distinction
// more than 75% is first class.
// more than 60% is second class.
// more than 40% is pass.
// fail.


// Cases
// const grade = "second";

// switch(grade) {
//   case "distinction":
//     console.log("More than 85% marks");
//     break;
//   case "first":
//     console.log("Between 75% and 85% marks");
//     break;
//   case "second":
//     console.log("Between 60% and 75% marks");
//     break;

//   default:
//     console.log("Marks are less than 40%");
//     break;
// }