//CONTENT MOVEMENTS FOR ABOUT

const Co2 = document.querySelector("#C02");
const Co3 = document.querySelector("#C03");
const Co4 = document.querySelector("#C04");
const Co5 = document.querySelector("#C05");
const o2 = document.querySelector("#o2");
const o3 = document.querySelector("#o3");
const o4 = document.querySelector("#o4");
const o5 = document.querySelector("#o5");

//general container for content
const conContainerO2 = document.querySelector("#content-container");
const conContainer03 = document.querySelector("#content-container03");
const conContainer04 = document.querySelector("#content-container04");
const conContainer05 = document.querySelector("#content-container05");

const sec1 = document.querySelector(".sec1");
const sec2 = document.querySelector(".sec2");
const sec3 = document.querySelector(".sec3");
const dsec1 = document.querySelector(".dsec1");
const dsec2 = document.querySelector(".dsec2");
const dsec3 = document.querySelector(".dsec3");

const unsectionL1 = document.querySelectorAll(".unsectionL1");
const unsectionR1 = document.querySelector(".unsectionR1");
const unsectionL2 = document.querySelector(".unsectionL2");
const unsectionR2 = document.querySelector(".unsectionR2");
const unsectionL3 = document.querySelectorAll(".unsectionL3");
const unsectionR3 = document.querySelector(".unsectionR3");

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

  //reset of content-boxs
  conContainer03.classList = "hide center overflow";
  conContainer04.classList = "hide center overflow";
  conContainer05.classList = "hide center overflow";
  sec1.classList.remove("leftToRight");
  sec2.classList.remove("leftToRight");
  sec3.classList.remove("leftToRight");

  unsectionR1.classList.remove("leftToRight");
  unsectionR2.classList.remove("leftToRight");
  unsectionR3.classList.remove("leftToRight");

  unsectionL1.classList.remove("rightToLeft");
  unsectionL2.classList.remove("rightToLeft");
  unsectionL3.classList.remove("rightToLeft");

  //ACTIVATE CONTENT CONTAINER O2
  console.log("activate content container");
  conContainerO2.classList.remove("hide");
  conContainerO2.offsetWidth;
  conContainerO2.classList.add("content_box");

  //RESET OTHER CONTENT CONTAINERS
  conContainer03.classList.remove("content_box");
  conContainer04.classList.remove("content_box");
  conContainer05.classList.remove("content_box");

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

  //reset of content-boxs
  conContainerO2.classList = "hide center overflow";
  conContainer04.classList = "hide center overflow";
  conContainer05.classList = "hide center overflow";

  sec1.classList.remove("leftToRight");
  sec2.classList.remove("leftToRight");
  sec3.classList.remove("leftToRight");

  unsectionR1.classList.remove("leftToRight");
  unsectionR2.classList.remove("leftToRight");
  unsectionR3.classList.remove("leftToRight");

  unsectionL1.classList.remove("rightToLeft");
  unsectionL2.classList.remove("rightToLeft");
  unsectionL3.classList.remove("rightToLeft");

  //ACTIVATE CONTENT CONTAINER O3
  console.log("activate content container");
  conContainer03.classList.remove("hide");
  conContainer03.offsetWidth;
  conContainer03.classList.add("content_box");

  //RESET OTHER CONTENT CONTAINERS
  conContainerO2.classList.remove("content_box");
  conContainer04.classList.remove("content_box");
  conContainer05.classList.remove("content_box");

  //START CONTENT REVEAL FUNCTION
  reveal();
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

  //reset of content-boxs
  conContainerO2.classList = "hide center overflow";
  conContainer03.classList = "hide center overflow";
  conContainer05.classList = "hide center overflow";

  sec1.classList.remove("leftToRight");
  sec2.classList.remove("leftToRight");
  sec3.classList.remove("leftToRight");

  unsectionR1.classList.remove("leftToRight");
  unsectionR2.classList.remove("leftToRight");
  unsectionR3.classList.remove("leftToRight");

  unsectionL1.classList.remove("rightToLeft");
  unsectionL2.classList.remove("rightToLeft");
  unsectionL3.classList.remove("rightToLeft");

  //ACTIVATE CONTENT CONTAINER O4
  console.log("activate content container");
  conContainer04.classList.remove("hide");
  conContainer04.offsetWidth;
  conContainer04.classList.add("content_box");

  //RESET OTHER CONTENT CONTAINERS
  conContainerO2.classList.remove("content_box");
  conContainer03.classList.remove("content_box");
  conContainer05.classList.remove("content_box");

  //START CONTENT REVEAL FUNCTION
  reveal();
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

  //reset of content-boxs
  conContainerO2.classList = "hide center overflow";
  conContainer03.classList = "hide center overflow";
  conContainer04.classList = "hide center overflow";

  sec1.classList.remove("leftToRight");
  sec2.classList.remove("leftToRight");
  sec3.classList.remove("leftToRight");

  unsectionR1.classList.remove("leftToRight");
  unsectionR2.classList.remove("leftToRight");
  unsectionR3.classList.remove("leftToRight");

  unsectionL1.classList.remove("rightToLeft");
  unsectionL2.classList.remove("rightToLeft");
  unsectionL3.classList.remove("rightToLeft");

  //ACTIVATE CONTENT CONTAINER O5
  console.log("activate content container");
  conContainer05.classList.remove("hide");
  conContainer05.offsetWidth;
  conContainer05.classList.add("content_box");

  //RESET OTHER CONTENT CONTAINERS
  conContainerO2.classList.remove("content_box");
  conContainer03.classList.remove("content_box");
  conContainer04.classList.remove("content_box");

  //START CONTENT REVEAL FUNCTION
  reveal();
}

//ACTIVATE CONTENT IN CONTENT CONTAINER

function reveal() {
  if (conContainerO2.classList.contains("content_box")) {
    console.log("conContainer02 revealed");
    if (window.matchMedia("(max-width: 800px)").matches) {
      console.log("reveal for mobil");
      window.addEventListener("scroll", show);

      function show() {
        //SCROLL VARIABLES ARE FROM CHATGPT
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercent >= 25) {
          sec1.classList.add("leftToRight");
        }
        if (scrollPercent >= 30) {
          sec2.classList.add("leftToRight");
        }
        if (scrollPercent >= 35) {
          sec3.classList.add("leftToRight");
          window.removeEventListener("scroll", show);
        }
      }
    } else {
      console.log("reveal for desktop");
      window.addEventListener("scroll", show);

      function show() {
        //SCROLL VARIABLES ARE FROM CHATGPT
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercent >= 20) {
          unsectionL1.classList.add("rightToLeft");
          unsectionR1.classList.add("leftToRight");
        }
        if (scrollPercent >= 25) {
          unsectionL2.classList.add("rightToLeft");
          unsectionR2.classList.add("leftToRight");
        }
        if (scrollPercent >= 30) {
          unsectionL3.classList.add("rightToLeft");
          unsectionR3.classList.add("leftToRight");
          window.removeEventListener("scroll", show);
        }
      }
    }
  } else if (conContainer03.classList.contains("content_box")) {
    console.log("conContainer03 revealed");
    if (window.matchMedia("(max-width: 800px)").matches) {
      console.log("reveal for mobil");
      window.addEventListener("scroll", show);

      function show() {
        //SCROLL VARIABLES ARE FROM CHATGPT
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercent >= 25) {
          sec1.classList.add("leftToRight");
        }
        if (scrollPercent >= 30) {
          sec2.classList.add("leftToRight");
        }
        if (scrollPercent >= 35) {
          sec3.classList.add("leftToRight");
          window.removeEventListener("scroll", show);
        }
      }
    } else {
      console.log("reveal for desktop");
      window.addEventListener("scroll", show);

      function show() {
        //SCROLL VARIABLES ARE FROM CHATGPT
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercent >= 20) {
          unsectionL1.classList.add("rightToLeft");
          unsectionR1.classList.add("leftToRight");
        }
        if (scrollPercent >= 25) {
          unsectionL2.classList.add("rightToLeft");
          unsectionR2.classList.add("leftToRight");
        }
        if (scrollPercent >= 30) {
          unsectionL3.classList.add("rightToLeft");
          unsectionR3.classList.add("leftToRight");
          window.removeEventListener("scroll", show);
        }
      }
    }
  } else if (conContainer04.classList.contains("content_box")) {
    console.log("conContainer04 revealed");
    if (window.matchMedia("(max-width: 800px)").matches) {
      console.log("reveal for mobil");
      window.addEventListener("scroll", show);

      function show() {
        //SCROLL VARIABLES ARE FROM CHATGPT
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercent >= 25) {
          sec1.classList.add("leftToRight");
        }
        if (scrollPercent >= 30) {
          sec2.classList.add("leftToRight");
        }
        if (scrollPercent >= 35) {
          sec3.classList.add("leftToRight");
          window.removeEventListener("scroll", show);
        }
      }
    } else {
      console.log("reveal for desktop");
      window.addEventListener("scroll", show);

      function show() {
        //SCROLL VARIABLES ARE FROM CHATGPT
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercent >= 20) {
          unsectionL1.classList.add("rightToLeft");
          unsectionR1.classList.add("leftToRight");
        }
        if (scrollPercent >= 25) {
          unsectionL2.classList.add("rightToLeft");
          unsectionR2.classList.add("leftToRight");
        }
        if (scrollPercent >= 30) {
          unsectionL3.classList.add("rightToLeft");
          unsectionR3.classList.add("leftToRight");
          window.removeEventListener("scroll", show);
        }
      }
    }
  } else if (conContainer05.classList.contains("content_box")) {
    console.log("conContainer05 revealed");
    if (window.matchMedia("(max-width: 800px)").matches) {
      console.log("reveal for mobil");
      window.addEventListener("scroll", show);

      function show() {
        //SCROLL VARIABLES ARE FROM CHATGPT
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercent >= 25) {
          sec1.classList.add("leftToRight");
        }
        if (scrollPercent >= 30) {
          sec2.classList.add("leftToRight");
        }
        if (scrollPercent >= 35) {
          sec3.classList.add("leftToRight");
          window.removeEventListener("scroll", show);
        }
      }
    } else {
      console.log("reveal for desktop");
      window.addEventListener("scroll", show);

      function show() {
        //SCROLL VARIABLES ARE FROM CHATGPT
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercent >= 20) {
          unsectionL1.classList.add("rightToLeft");
          unsectionR1.classList.add("leftToRight");
        }
        if (scrollPercent >= 25) {
          unsectionL2.classList.add("rightToLeft");
          unsectionR2.classList.add("leftToRight");
        }
        if (scrollPercent >= 30) {
          unsectionL3.classList.add("rightToLeft");
          unsectionR3.classList.add("leftToRight");
          window.removeEventListener("scroll", show);
        }
      }
    }
  }
}
