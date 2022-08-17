console.log("ABCD");

// const element = document.querySelector("ul > li:first-child");
// console.log(element);


//These 2 are same.
// document.querySelector("#abcd"); //Uses CSS query
// document.getElementById("abcd"); //Uses core DOM approach.

// const elements = document.querySelectorAll("ul ~ ul > li");
// console.log(elements);


// const obj = document.getElementsByClassName("vakas");

// const obj = document.querySelectorAll(".vakas");

// console.log(obj);

// document.getElementById("something").classList.add("vakas");

// console.log(obj);

// const rohit_para = document.createElement("p");
// const abhishek_btn = document.createElement("button");
// document.body.appendChild(abhishek_btn);
// document.body.appendChild(rohit_para);

// abhishek_btn.innerText = "Click me";
// rohit_para.innerText = "My Paragraph";

// rohit_para.innerText = "<a href='https://www.google.com'>Take me to Google</a>";
// rohit_para.innerHTML = "<a href='https://www.google.com'>Take me to Google</a>";

// console.log(rohit_para.innerHTML);


// const parent = document.getElementById("container");
// parent.appendChild(abhishek_btn);
// parent.appendChild(rohit_para);


const shrey_para = document.getElementById("shrey-para");

shrey_para.style.backgroundColor = "yellow";
shrey_para.style.color = "#FF0000";
shrey_para.style.fontSize = "150%";

// background-color -> CSS, backgroundColor -> JS
document.body.style.backgroundColor = "white";