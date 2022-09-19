// const btn = document.getElementById("main_btn");
// btn.addEventListener("click", _ => {
//   const pr = fetch("https://reqres.in/api/users");
//   pr.then(response => {
//     // response.json();
//     // response.text();
//     console.log(response);
//     const json_pr = response.json();
//     json_pr.then(data => {

//       console.log(data);
//       // const o = JSON.parse(data);
    
//       // console.log(o);
//     })
//   })
// });



// const arr = [
//   {
//     anything: [1, 2, 3, 4],
//   }, {
//     anything: [6, 7, 8, 9]
//   }
// ];

// op -> [1, 2, 3, 4, 6, 7, 8, 9]


// const op = arr.reduce((c, e) => {
//   const a = e.anything; // []
//   // console.log(c);
//   return [...c, ...a];
// }, []);

// console.log(op);

//Callback hell. Triangle avoid karo!
// const btn = document.getElementById("main_btn");
// btn.addEventListener("click", _ => {
//   const f_promise = fetch("https://reqres.in/api/users");
//   f_promise.then(response => {
//     const j_promise = response.json();
//     j_promise.then(json => {
//       console.log(json);
//       const another_pr = fetch("https://reqres.in/api/users?page=2");
//       another_pr.then(another_r => {
//         const another_j_promise = another_r.json();
//         another_j_promise.then(another_json => {
//           console.log(another_json);
//         })
//       })
//     });
//   });
// })

// Then chaining, this is better than Callback hell.
// btn.addEventListener("click", _ => {
//   const f_promise = fetch("https://reqres.in/api/users");
//   f_promise.then(response => {
//     const j_promise = response.json();
//     return j_promise;
//   }).then(json => {
//     console.log(json);
//     const another_pr = fetch("https://reqres.in/api/users?page=2");
//     return another_pr;
//   }).then(another_r => {
//     const another_j_promise = another_r.json();
//     return another_j_promise;
//   }).then(another_json => {
//     console.log(another_json);
//   })
// })

// btn.addEventListener("click", _ => {
//   fetch("https://reqres.in/api/users")
//   .then(r => r.json())
//   .then(json => {console.log(json); return fetch("https://reqres.in/api/users?page=2"); })
//   .then(r => r.json())
//   .then(another_json => console.log(another_json));
// })

/**
 * response => {
 *    const pr = response.json();
 *    return pr;
 * }
 * 
 * r => {
 *  const pr = r.json();
 *  return pr;
 * }
 * 
 * r => {
 *    return r.json();
 * }
 * 
 * r => { return r.json(); }
 * 
 * r => r.json();
 * 
 */

const render = data => {
  const list = data.data;
  const parent = document.getElementById("list");
  parent.innerHTML = "";
  list.forEach(element => {
    const new_li = document.createElement("li");
    new_li.innerText = `${element.first_name} ${element.last_name}`;
    parent.appendChild(new_li);
  });
}

const btn = document.getElementById("main_btn");
btn.addEventListener("click", _ => {

  fetch("https://reqres.in/api/users")
  .then(r => r.json())
  .then(data => render(data));

});

//Doubts

const sai = ["sai", "nagasai", "arun", "deepak"];

sai.map(singleWord => {
  singleWord = singleWord.split("");
  singleWord.forEach(singleCharacter => {
    console.log(singleCharacter);
  })
})