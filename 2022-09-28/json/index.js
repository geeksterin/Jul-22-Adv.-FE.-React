const obj = {
  first_name: "Aayush",
  last_name: "Sinha",
  role: "Educator",
};

console.log(obj);

const json_str  = JSON.stringify(obj);

console.log(json_str);

const another_json = `{
  "first_name": "Aayush",
  "last_name": "Sinha",
  "role": "Educator"
}`;


const another_obj = JSON.parse(another_json);
console.log(another_obj);






const xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users");

xhr.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(this.responseText);
    console.log(data);
  }
}

xhr.send();

function abcd() {
  return [10, 25]; //Finally returning 1 thing which is an array.
}