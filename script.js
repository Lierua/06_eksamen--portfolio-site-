//GENERAL TITLE MOVEMENT

const title = document.querySelector("#titletext");
const bio = document.querySelector("#bio");

window.addEventListener("load", () => {
  showTitle();
  showBio();
});

function showTitle() {
  console.log("start");
  title.classList.add("titleup");
}
function showBio() {
  console.log("show bio");
  bio.classList.add("clicktheme");
}

//CONTENT MOVEMENTS FOR ABOUT

const Co2 = document.querySelector("#C02");
const Co3 = document.querySelector("#C03");
const Co4 = document.querySelector("#C04");
const Co5 = document.querySelector("#C05");
const o2 = document.querySelector("#o2");
const o3 = document.querySelector("#o3");
const o4 = document.querySelector("#o4");
const o5 = document.querySelector("#o5");

o2.addEventListener("click", clickO2);

function clickO2() {
  console.log("02");

  //remove and add after set timer events
  o2.removeEventListener("click", clickO2);
  o3.removeEventListener("click", clickO3);
  o4.removeEventListener("click", clickO4);
  o5.removeEventListener("click", clickO5);

  setTimeout(() => {
    o2.addEventListener("click", clickO2);
    o3.addEventListener("click", clickO3);
    o4.addEventListener("click", clickO4);
    o5.addEventListener("click", clickO5);
  }, 1000);

  if (Co3.classList.contains("clicktheme")) {
    console.log("moved and removed");
    Co3.classList.remove("clicktheme");
    // RESET
    Co3.offsetWidth;
    Co3.classList.add("clickthemeup");
    Co3.addEventListener("animationend", moveO2);
  } else if (Co4.classList.contains("clicktheme")) {
    Co4.classList.remove("clicktheme");
    // RESET
    Co4.offsetWidth;
    Co4.classList.add("clickthemeup");
    Co4.addEventListener("animationend", moveO2);
  } else if (Co5.classList.contains("clicktheme")) {
    Co5.classList.remove("clicktheme");
    // RESET
    Co5.offsetWidth;
    Co5.classList.add("clickthemeup");
    Co5.addEventListener("animationend", moveO2);
  } else {
    moveO2();
  }
}

function moveO2() {
  console.log("move02");
  Co3.classList.remove("clickthemeup");
  Co4.classList.remove("clickthemeup");
  Co5.classList.remove("clickthemeup");

  Co3.removeEventListener("animationend", moveO2);
  Co4.removeEventListener("animationend", moveO2);
  Co5.removeEventListener("animationend", moveO2);

  Co2.classList.add("clicktheme");
}

o3.addEventListener("click", clickO3);

function clickO3() {
  console.log("03");

  //remove and add after set timer events
  o2.removeEventListener("click", clickO2);
  o3.removeEventListener("click", clickO3);
  o4.removeEventListener("click", clickO4);
  o5.removeEventListener("click", clickO5);

  setTimeout(() => {
    o2.addEventListener("click", clickO2);
    o3.addEventListener("click", clickO3);
    o4.addEventListener("click", clickO4);
    o5.addEventListener("click", clickO5);
  }, 1000);

  if (Co2.classList.contains("clicktheme")) {
    console.log("moved and removed");
    Co2.classList.remove("clicktheme");
    // RESET
    Co2.offsetWidth;
    Co2.classList.add("clickthemeup");
    Co2.addEventListener("animationend", moveO3);
  } else if (Co4.classList.contains("clicktheme")) {
    Co4.classList.remove("clicktheme");
    // RESET
    Co4.offsetWidth;
    Co4.classList.add("clickthemeup");
    Co4.addEventListener("animationend", moveO3);
  } else if (Co5.classList.contains("clicktheme")) {
    Co5.classList.remove("clicktheme");
    // RESET
    Co5.offsetWidth;
    Co5.classList.add("clickthemeup");
    Co5.addEventListener("animationend", moveO3);
  } else {
    moveO3();
  }
}

function moveO3() {
  console.log("move03");
  Co2.classList.remove("clickthemeup");
  Co4.classList.remove("clickthemeup");
  Co5.classList.remove("clickthemeup");

  Co2.removeEventListener("animationend", moveO3);
  Co4.removeEventListener("animationend", moveO3);
  Co5.removeEventListener("animationend", moveO3);

  Co3.classList.add("clicktheme");
}

o4.addEventListener("click", clickO4);

function clickO4() {
  console.log("04");

  //remove and add after set timer events
  o2.removeEventListener("click", clickO2);
  o3.removeEventListener("click", clickO3);
  o4.removeEventListener("click", clickO4);
  o5.removeEventListener("click", clickO5);

  setTimeout(() => {
    o2.addEventListener("click", clickO2);
    o3.addEventListener("click", clickO3);
    o4.addEventListener("click", clickO4);
    o5.addEventListener("click", clickO5);
  }, 1000);

  if (Co3.classList.contains("clicktheme")) {
    console.log("moved and removed");
    Co3.classList.remove("clicktheme");
    // RESET
    Co3.offsetWidth;
    Co3.classList.add("clickthemeup");
    Co3.addEventListener("animationend", moveO4);
  } else if (Co2.classList.contains("clicktheme")) {
    Co2.classList.remove("clicktheme");
    // RESET
    Co2.offsetWidth;
    Co2.classList.add("clickthemeup");
    Co2.addEventListener("animationend", moveO4);
  } else if (Co5.classList.contains("clicktheme")) {
    Co5.classList.remove("clicktheme");
    // RESET
    Co5.offsetWidth;
    Co5.classList.add("clickthemeup");
    Co5.addEventListener("animationend", moveO4);
  } else {
    moveO4();
  }
}

function moveO4() {
  console.log("move04");
  Co3.classList.remove("clickthemeup");
  Co2.classList.remove("clickthemeup");
  Co5.classList.remove("clickthemeup");

  Co3.removeEventListener("animationend", moveO4);
  Co2.removeEventListener("animationend", moveO4);
  Co5.removeEventListener("animationend", moveO4);

  Co4.classList.add("clicktheme");
}

o5.addEventListener("click", clickO5);

function clickO5() {
  console.log("05");

  //remove and add after set timer events
  o2.removeEventListener("click", clickO2);
  o3.removeEventListener("click", clickO3);
  o4.removeEventListener("click", clickO4);
  o5.removeEventListener("click", clickO5);

  setTimeout(() => {
    o2.addEventListener("click", clickO2);
    o3.addEventListener("click", clickO3);
    o4.addEventListener("click", clickO4);
    o5.addEventListener("click", clickO5);
  }, 1000);

  if (Co2.classList.contains("clicktheme")) {
    console.log("moved and removed");
    Co2.classList.remove("clicktheme");
    // RESET
    Co2.offsetWidth;
    Co2.classList.add("clickthemeup");
    Co2.addEventListener("animationend", moveO5);
  } else if (Co4.classList.contains("clicktheme")) {
    Co4.classList.remove("clicktheme");
    // RESET
    Co4.offsetWidth;
    Co4.classList.add("clickthemeup");
    Co4.addEventListener("animationend", moveO5);
  } else if (Co3.classList.contains("clicktheme")) {
    Co3.classList.remove("clicktheme");
    // RESET
    Co3.offsetWidth;
    Co3.classList.add("clickthemeup");
    Co3.addEventListener("animationend", moveO5);
  } else {
    moveO5();
  }
}

function moveO5() {
  console.log("move05");
  Co2.classList.remove("clickthemeup");
  Co4.classList.remove("clickthemeup");
  Co3.classList.remove("clickthemeup");

  Co2.removeEventListener("animationend", moveO5);
  Co4.removeEventListener("animationend", moveO5);
  Co3.removeEventListener("animationend", moveO5);

  Co5.classList.add("clicktheme");
}
