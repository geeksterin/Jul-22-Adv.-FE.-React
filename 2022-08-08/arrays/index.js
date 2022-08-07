console.log("ABCD");

const participants = ["Aayush", "Ankur", "Bhuwan", "Abhishek"];
console.log(typeof participants);
// console.log(participants);

const str = "String ABCD Blah blah";
const str_again = new String("String ABCD Blah blah");
console.log(typeof str);
console.log(typeof str_again);

const a = true;
const a_again = new Boolean(true);
console.log(typeof a);

const num = 12.3456;
const num_again = new Number(12.3456);
console.log(typeof num);


const participants_again = new Array("Aayush", "Ankur", "Bhuwan", "Abhishek");
console.log(participants_again);


const addition_again = new Function("a", "b", "return a + b");
console.log(addition_again(10, 5));

const addition = (a, b) => {
  return a + b;
}

console.log(addition(10, 5));

// eval("alert('Hello World')");


const arr = ["Something", "abcd", 1, false, "zzzzz", "again", 1337, true, 1.4];

arr[3.5] = "ABCD Geeks";

console.log(arr[4]); //zzzzz
console.log(arr[7]); //true
console.log(arr[6 - 2]); //zzzzz
console.log(arr[6] - arr[2]); //1336
console.log(arr[6/2]); //false
console.log(arr[6] + arr[0]); //1337Something
console.log(arr[7/2]); //ABCD Geeks
console.log(arr[10000000000]); //undefined

console.log(arr);

const arr2 = [];
console.log(arr2);


const arr3 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
console.log(arr3);
// arr3.splice(3, 2, "April-04", "May-05");

// arr3.splice(3, 7);

// console.log(arr3);


// console.log(arr3.slice(3, 7)); //It includes the starting index but excludes the ending index.

// console.log(arr3.slice(-3)); //Negative value will give from the last element.

// console.log(arr3.join(", "));

// const removed_element = arr3.shift();
// console.log(removed_element);
// console.log(arr3);

// arr3[3.5] = "sfjhdjkfhdjjd";
// arr3[3.6] = "sfjhdjkfhdjjd";
// arr3[3.7] = "sfjhdjkfhdjjd";
// arr3[3.8] = "sfjhdjkfhdjjd";
// arr3[3.9] = "sfjhdjkfhdjjd";
// arr3[3.1] = "sfjhdjkfhdjjd";
// arr3[3.2] = "sfjhdjkfhdjjd";

arr3[1000] = "Something";


arr3.unshift("Geekmonth");
console.log(arr3.length);
console.log(arr3);


//This will check for vowels and return it's count for a single word
const getVoewlCount = word => {
  let vowel = 0;
  for(let i = 0; i < word.length; i = i + 1) {
    const single_character = word[i].toLowerCase();
    if(single_character == 'a' || single_character == 'e' || single_character == 'i' || single_character == 'o' || single_character == 'u') {
      vowel = vowel + 1;
    }
  }

  return vowel;
}

const getMax = (...words) => {
  let maxString = words[0];
  let maxCount = getVoewlCount(words[0]);

  for(let i = 0; i < words.length; i = i + 1) {
    const single_word = words[i];
    const single_count = getVoewlCount(single_word);
    if(single_count > maxCount) {
      maxCount = single_count;
      maxString = single_word;
    }
  }

  return maxString;
}

const word = getMax("ABCD", "AEIOU", "ZZZZ", "AEI");
console.log(word);