console.log("Promises");

const p = new Promise((resolve, reject) => {
  console.log("ABCD");
  resolve("This data is coming from the Network call");
  console.log("XYZ");
});


p.then((d) => {
  console.log(d);
  console.log("Promise fullfilled, doing something else");
}).catch(() => {
  console.log("Promise has been rejected");
});

console.log(p);

const p2 = fetch("https://jsonplaceholder.typicode.com/users");
console.log(p2);

p2.then((response) => {
  console.log(response);
  const data = response.text();
  console.log(data);
  data.then((text) => {
    console.log(text);
  })
})