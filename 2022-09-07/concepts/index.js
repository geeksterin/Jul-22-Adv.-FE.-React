const a1 = 10 + 10;
console.log(a1);

const a2 = "10" + "10";
console.log(a2);

const a3 = 10 + "20";
console.log(a3);

const a4 = 10 + 10 + 10 + "10";
//20 + 10 + "10"
//30 + "10"
//"3010"
console.log(a4);

const a5 = "10" + 10 + 10 + 10;
//"1010" + 10 + 10
//"101010" + 10
//"10101010"
console.log(a5);


const a6 = "10" + (10 + 10 + 10);
//"10" + (20 + 10)
//"10" + (30)
//"10" + 30
//"1030"
console.log(a6);

const a7= "10" + 10 ** 2;
//"10" + 100
//"10100"
console.log(a7);


const a8 = "10" + 10 - 10;
//"1010" - 10
//1000
console.log(a8);

const a9 = "10" + 30 - 10;
//"1030" - 10;
//1030 - 10
//1020
console.log(a9);

const a10 = 10 + 10 - 10 + "10" - "10" + 20 - 30 + "0";
//20 - 10 + "10" - "10" + 20 - 30 + "0"
//10 + "10" - "10" + 20 - 30 + "0"
//"1010" - "10" + 20 - 30 + "0"
//1000 + 20 - 30 + "0"
//1020 - 30 + "0"
//990 + "0"
//"9900"
console.log(a10);

const a11 = "20" - "10";
console.log(a11);

const a12 = "abcd" - "xyz";
console.log(a12);

const a13 = -10 - "-10";
console.log(a13);


const a14 = [1, 2, 3, 4] + "100";
console.log(a14);

const a15 = 10 * "2";
console.log(a15);


const a16 = [10, 20, 30] - "60";
console.log(a16); //Not a number

console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/*
   Your OTP for Transaction for <amount> Rupees with Card Number ending with XX<CardNumber> is <OTPValue>.
*/

const amount = 100;
const CardNumber = 4582;
const otp = 123765;
// const otp = "" + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);

const str = `Your OTP for Transaction for ${amount} Rupees with Card Number ending with XX${CardNumber} is ${otp}.`
console.log(str);
// `

const a = 1;
const b = 2;
const c = 3;
const d = 4;

const result = "" + a + b + c + d;
//"1" + 2 + 3 + 4
//"12" + 3 + 4
//"123" + 4
//"1234"

//1234

// console.log(Math.trunc(Math.random() * 100000 + 1));
// 0.00000012 * 100000
// 00003 => 3


const my_fname = "Aayush";
const my_lname = "Sinha";
const my_role = "Educator";

//Without String Templating. Just concatenation.
const str0 = "Hi, I am " + my_fname + " " + my_lname + " and I am your " + my_role;


//With string Templating.
const str1 = `Hi, I am ${my_fname} ${my_lname} and I am your ${my_role}`;
console.log(str0, str1);

const my_fn = () => {
  return "Aayush";
}

const str2 = `Hi, I am ${my_fn()}`;
console.log(str2);

const str3 = `1 + 1 = ${1+1}`;
console.log(str3);