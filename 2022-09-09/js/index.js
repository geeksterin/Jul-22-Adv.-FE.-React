
let a = 1;
var b = 2;
var c = 3000;

function test() {
  console.log(this.a, this.b); //This will refer to global scope (window). a = undefined, b = 2
  console.log(this);
  let a = 10;
  var b = 11;
  {
    let a = 20; //because a it a let variable, it will have it's OWN scope (OWN Memory location). IT will NOT update the parent variable. Because let and cost are block scoped.
    var b = 21;
  }

  console.log(a, b); //a = 10, b = 21
}
console.log(a, b); //a = 1, b = 2;

test();

console.log(a, b); //a = 1, b = 2;


// console.log(tdz);
// let tdz = 20;


let s = "jksgdhghjdfghjsdfghjsgfshjd";

s = Number(s); //This will convert to a Number
console.log(s); //NaN
console.log(typeof s); //This HAS to be number

console.log(undefined + 1);
//Why no concatenation -> undefined has a lower priority than Number datatype. It will convert to Number, but since it cannot be, it will be NaN
console.log(undefined + "1");
console.log(undefined + undefined); 

const abcd = NaN;

console.log(isNaN(abcd)); //true

console.log(abcd == NaN);

console.log(NaN == NaN);

const v1 = "ABCD"; //When converted, this will give NaN
const v2 = "XYZ"; //When converted, this will give NaN

console.log(v1 == v2); //false

console.log(Number(v1) == Number(v2)); //false

//"NaN" 


let v3 = "1234abcd";
let v4 = parseInt(v3);
v3 = Number(v3);
console.log(v3);
console.log(v4);


const arr = [26, 27, 26, 26, 26, 27, 27, 28, 28, 29, 30];

const unique_f = arr.filter((e, i, original_arr) => {
  if(original_arr.lastIndexOf(e) !== i) {
    return false
  } else {
    return true
  }
});


const unique = arr.map((e, i, original_arr) => {
  if(original_arr.lastIndexOf(e) !== i) {
    return undefined;
  } else {
    return e;
  }
})
console.log(unique);
console.log(unique_f);