const btn = document.getElementById("main_btn");

// btn.addEventListener("click", _ => {
//   fetch("https://reqres.in/api/users")
//   .then(res => {
//     return res.json();
//   })
//   .then(data => {
//     console.log(data);
//     // alert(data);
//   })
// });

btn.addEventListener("click", async _ => {

  const response = await fetch("https://reqres.in/api/users"); 
  // Fetch returns a promise. On resolution, we get the response object.
  // From this object, we need to extract the data that we want. That extraction process is ALSO a promise.
  const data = await response.json();

  const response_2 = await fetch("https://reqres.in/api/users?page=2");
  const data_2 = await response_2.json();
  
  console.log(data);

  // console.log(data.data);
  // console.log(data_2.data);
  const final_arr = [...data.data, ...data_2.data];
  console.log(final_arr);
});

//IIFE -> Immediately Invoked Function Expression
(async _ => {
  try {
    const response = await fetch("lsidjkdhgjdshjgdhjdhjgf"); 
    const data = await response.json();
    console.log(data);
  } catch(e) {
    console.log("Something went wrong");
  }
})();