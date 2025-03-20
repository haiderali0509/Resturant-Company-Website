let bar = document.querySelector(".bar-icon");
// let nav=document.ge
// let side_nav_id = document.getElementById("click-side-nav");

// By Display None

// bar.addEventListener("click", () => {
//   document.getElementById("click-side-nav").style.display = "flex";
// });
// let close = document.querySelector("#mob-close");
// close.addEventListener("click", () => {
//   document.getElementById("click-side-nav").style.display = "none";
// });
// By Class Toggle
bar.addEventListener("click", () => {
  document.getElementById("click-side-nav").style.transform="translate(0vw)";
});
let close = document.querySelector("#mob-close");
close.addEventListener("click", () => {
  document.getElementById("click-side-nav").style.transform="translate(30vw)";
});