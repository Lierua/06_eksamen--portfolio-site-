//CONTENT MOVEMENTS FOR ABOUT

const Co2 = document.querySelector("#C02");
const Co3 = document.querySelector("#C03");
const Co4 = document.querySelector("#C04");
const Co5 = document.querySelector("#C05");
const o2 = document.querySelector("#o2");
const o3 = document.querySelector("#o3");
const o4 = document.querySelector("#o4");
const o5 = document.querySelector("#o5");

const conContainerO2 = document.querySelector("#content-container");
const sec1 = document.querySelector(".sec1");
const sec2 = document.querySelector(".sec2");
const sec3 = document.querySelector(".sec3");
const o2sec1 = document.querySelector("#o2sec1");
const o2sec2 = document.querySelector("#o2sec2");
const o2sec3 = document.querySelector("#o2sec3");

//general container for content
const conContainer = document.querySelector("#content-container");
window.addEventListener("load", openContent);
function openContent() {
  moveO2();
}

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
    o3.classList.remove("active");
    // RESET
    Co3.offsetWidth;
    Co3.classList.add("clickthemeup");
    Co3.addEventListener("animationend", moveO2);
  } else if (Co4.classList.contains("clicktheme")) {
    Co4.classList.remove("clicktheme");
    // RESET
    Co4.offsetWidth;
    o4.classList.remove("active");
    Co4.classList.add("clickthemeup");
    Co4.addEventListener("animationend", moveO2);
  } else if (Co5.classList.contains("clicktheme")) {
    Co5.classList.remove("clicktheme");
    // RESET
    Co5.offsetWidth;
    o5.classList.remove("active");
    Co5.classList.add("clickthemeup");
    Co5.addEventListener("animationend", moveO2);
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
  o2.classList.add("active");

  //ACTIVATE CONTENT CONTAINER O2
  console.log("activate content container");
  conContainer.classList.remove("hide");
  conContainer.classList.add("content_box");

  //START CONTENT REVEAL FUNCTION
  reveal();
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
    o2.classList.remove("active");
    Co2.classList.add("clickthemeup");
    Co2.addEventListener("animationend", moveO3);
  } else if (Co4.classList.contains("clicktheme")) {
    Co4.classList.remove("clicktheme");
    // RESET
    Co4.offsetWidth;
    o4.classList.remove("active");
    Co4.classList.add("clickthemeup");
    Co4.addEventListener("animationend", moveO3);
  } else if (Co5.classList.contains("clicktheme")) {
    Co5.classList.remove("clicktheme");
    // RESET
    Co5.offsetWidth;
    o5.classList.remove("active");
    Co5.classList.add("clickthemeup");
    Co5.addEventListener("animationend", moveO3);
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

  o3.classList.add("active");
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
    o3.classList.remove("active");
    Co3.classList.add("clickthemeup");
    Co3.addEventListener("animationend", moveO4);
  } else if (Co2.classList.contains("clicktheme")) {
    Co2.classList.remove("clicktheme");
    // RESET
    Co2.offsetWidth;
    o2.classList.remove("active");
    Co2.classList.add("clickthemeup");
    Co2.addEventListener("animationend", moveO4);
  } else if (Co5.classList.contains("clicktheme")) {
    Co5.classList.remove("clicktheme");
    // RESET
    Co5.offsetWidth;
    o5.classList.remove("active");
    Co5.classList.add("clickthemeup");
    Co5.addEventListener("animationend", moveO4);
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

  o4.classList.add("active");
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
    o2.classList.remove("active");
    Co2.classList.add("clickthemeup");
    Co2.addEventListener("animationend", moveO5);
  } else if (Co4.classList.contains("clicktheme")) {
    Co4.classList.remove("clicktheme");
    // RESET
    Co4.offsetWidth;
    o4.classList.remove("active");
    Co4.classList.add("clickthemeup");
    Co4.addEventListener("animationend", moveO5);
  } else if (Co3.classList.contains("clicktheme")) {
    Co3.classList.remove("clicktheme");
    // RESET
    Co3.offsetWidth;
    o3.classList.remove("active");
    Co3.classList.add("clickthemeup");
    Co3.addEventListener("animationend", moveO5);
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

  o5.classList.add("active");
  Co5.classList.add("clicktheme");
}

//ACTIVATE CONTENT IN CONTENT CONTAINER
//SCROLL VARIABLES IS FROM CHATGPT

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
  setTimeout(() => {
    console.log(`Scroll Percentage: ${scrollPercent.toFixed(2)}%`);
  }, 1000);
});

function reveal() {
  if (conContainerO2.classList.contains("content_box")) {
    console.log("conContainer revealed");
    if (window.matchMedia("(max-width: 800px)").matches) {
      console.log("reveal for mobil");
      if (scrollPercent >= 30) {
        console.log("You've scrolled 30% of the page!");
        sec1.classList.add("leftToRight");
      }
    } else {
      console.log("reveal for desktop");
    }
  }
}
