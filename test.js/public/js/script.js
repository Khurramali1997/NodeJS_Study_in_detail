const btn1 = document.getElementById("entry");
const btn2 = document.getElementById("user");
let user = document.querySelector("user");
let entry = document.querySelector("entry");

document.addEventListener("DOMContentLoaded", () => {
  console.log("Dom loaded properly");
  console.log(btn2);
  btn2.addEventListener("click", () => {
    console.log("Done");
  });
});
