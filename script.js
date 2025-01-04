//GENERAL TITLE MOVEMENT

const title = document.querySelector("#titletext");
//const bio = document.querySelector("#bio");
const menu = document.querySelector("#menu");

window.addEventListener("load", () => {
  showTitle();
  //showBio();
  setTimeout(() => {
    addBG();
  }, 4000);
});

function addBG() {
  console.log("menubg");
  menu.classList.add("menubg");
}

function showTitle() {
  console.log("start");
  title.classList.add("titleup");
}
// function showBio() {
//   if (bio) {
//     console.log("show bio");
//     bio.classList.add("clicktheme");
//   } else {
//     console.log("no bio");
//   }
// }
