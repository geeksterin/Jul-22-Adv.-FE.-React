const btn_clicker = _ => {
  console.log("Button is clicked");
}

const img_clicker = _ => {
  console.log("Image is clicked");
}

const inp_changer = _ => {
  console.log("Input changed");
}

const realtime_changer = _ => {
  console.log("Realtime suggestion");
}

const form_submitter = _ => {
  console.log("Form submitted");
}

const ip1 = document.getElementById("ip1");
ip1.addEventListener('change', inp_changer);
ip1.addEventListener('keyup', realtime_changer);

const cb = document.querySelector("input[type=checkbox]");
cb.addEventListener('change', inp_changer);

const btn = document.getElementsByTagName("button");
btn[0].addEventListener('click', btn_clicker);

const img = document.getElementsByTagName("img");
img[0].addEventListener('click', img_clicker);

const form = document.getElementsByTagName("form");
form[0].addEventListener('submit', form_submitter);