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

const sec1 = document.querySelectorAll(".sec1");
const sec2 = document.querySelectorAll(".sec2");
const sec3 = document.querySelectorAll(".sec3");
const sec4 = document.querySelectorAll(".sec4");
const sec5 = document.querySelectorAll(".sec5");
const sec6 = document.querySelectorAll(".sec6");
const sec7 = document.querySelectorAll(".sec7");

const dsec1 = document.querySelectorAll(".dsec1");
const dsec2 = document.querySelectorAll(".dsec2");
const dsec3 = document.querySelectorAll(".dsec3");
const dsec4 = document.querySelectorAll(".dsec4");
const dsec5 = document.querySelectorAll(".dsec5");
const dsec6 = document.querySelectorAll(".dsec6");
const dsec7 = document.querySelectorAll(".dsec7");

const unsectionL1 = document.querySelectorAll(".unsectionL1");
const unsectionR1 = document.querySelectorAll(".unsectionR1");
const unsectionL2 = document.querySelectorAll(".unsectionL2");
const unsectionR2 = document.querySelectorAll(".unsectionR2");
const unsectionL3 = document.querySelectorAll(".unsectionL3");
const unsectionR3 = document.querySelectorAll(".unsectionR3");
const unsectionL4 = document.querySelectorAll(".unsectionL4");
const unsectionR4 = document.querySelectorAll(".unsectionR4");
const unsectionL5 = document.querySelectorAll(".unsectionL5");
const unsectionR5 = document.querySelectorAll(".unsectionR5");
const unsectionL6 = document.querySelectorAll(".unsectionL6");
const unsectionR6 = document.querySelectorAll(".unsectionR6");
const unsectionL7 = document.querySelectorAll(".unsectionL7");
const unsectionR7 = document.querySelectorAll(".unsectionR7");

// ChatGPT (Helper function to remove a class from all elements in a NodeList)
function removeClassFromElements(nodeList, className) {
  nodeList.forEach((element) => {
    element.classList.remove(className);
  });
}

window.addEventListener("load", openContent);
function openContent() {
  moveO2();
}

o2.addEventListener("click", clickO2);

function clickO2() {
  console.log("02");

  if (!o2.classList.contains("active")) {
    //make the other content boxes disappear
    conContainer03.classList.add("disappear");
    conContainer04.classList.add("disappear");
    conContainer04.classList.add("disappear");
  }
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
  conContainer05.classList = "hide center overflow";
  conContainer03.classList = "hide center overflow";
  conContainer04.classList = "hide center overflow";

  removeClassFromElements(sec1, "leftToRight");
  removeClassFromElements(sec2, "leftToRight");
  removeClassFromElements(sec3, "leftToRight");
  removeClassFromElements(sec4, "leftToRight");
  removeClassFromElements(sec5, "leftToRight");
  removeClassFromElements(sec6, "leftToRight");
  removeClassFromElements(sec7, "leftToRight");

  removeClassFromElements(unsectionR1, "leftToRight");
  removeClassFromElements(unsectionR2, "leftToRight");
  removeClassFromElements(unsectionR3, "leftToRight");
  removeClassFromElements(unsectionR4, "leftToRight");
  removeClassFromElements(unsectionR5, "leftToRight");
  removeClassFromElements(unsectionR6, "leftToRight");
  removeClassFromElements(unsectionR7, "leftToRight");

  removeClassFromElements(unsectionL1, "rightToLeft");
  removeClassFromElements(unsectionL2, "rightToLeft");
  removeClassFromElements(unsectionL3, "rightToLeft");
  removeClassFromElements(unsectionL4, "rightToLeft");
  removeClassFromElements(unsectionL5, "rightToLeft");
  removeClassFromElements(unsectionL6, "rightToLeft");
  removeClassFromElements(unsectionL7, "rightToLeft");

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

  if (!o3.classList.contains("active")) {
    //make the other content boxes disappear
    conContainerO2.classList.add("disappear");
    conContainer04.classList.add("disappear");
    conContainer05.classList.add("disappear");
  }
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
  conContainer05.classList = "hide center overflow";
  conContainer04.classList = "hide center overflow";

  removeClassFromElements(sec1, "leftToRight");
  removeClassFromElements(sec2, "leftToRight");
  removeClassFromElements(sec3, "leftToRight");
  removeClassFromElements(sec4, "leftToRight");
  removeClassFromElements(sec5, "leftToRight");
  removeClassFromElements(sec6, "leftToRight");
  removeClassFromElements(sec7, "leftToRight");

  removeClassFromElements(unsectionR1, "leftToRight");
  removeClassFromElements(unsectionR2, "leftToRight");
  removeClassFromElements(unsectionR3, "leftToRight");
  removeClassFromElements(unsectionR4, "leftToRight");
  removeClassFromElements(unsectionR5, "leftToRight");
  removeClassFromElements(unsectionR6, "leftToRight");
  removeClassFromElements(unsectionR7, "leftToRight");

  removeClassFromElements(unsectionL1, "rightToLeft");
  removeClassFromElements(unsectionL2, "rightToLeft");
  removeClassFromElements(unsectionL3, "rightToLeft");
  removeClassFromElements(unsectionL4, "rightToLeft");
  removeClassFromElements(unsectionL5, "rightToLeft");
  removeClassFromElements(unsectionL6, "rightToLeft");
  removeClassFromElements(unsectionL7, "rightToLeft");

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

  if (!o4.classList.contains("active")) {
    //make the other content boxes disappear
    conContainer03.classList.add("disappear");
    conContainerO2.classList.add("disappear");
    conContainer05.classList.add("disappear");
  }
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

  removeClassFromElements(sec1, "leftToRight");
  removeClassFromElements(sec2, "leftToRight");
  removeClassFromElements(sec3, "leftToRight");
  removeClassFromElements(sec4, "leftToRight");
  removeClassFromElements(sec5, "leftToRight");
  removeClassFromElements(sec6, "leftToRight");
  removeClassFromElements(sec7, "leftToRight");

  removeClassFromElements(unsectionR1, "leftToRight");
  removeClassFromElements(unsectionR2, "leftToRight");
  removeClassFromElements(unsectionR3, "leftToRight");
  removeClassFromElements(unsectionR4, "leftToRight");
  removeClassFromElements(unsectionR5, "leftToRight");
  removeClassFromElements(unsectionR6, "leftToRight");
  removeClassFromElements(unsectionR7, "leftToRight");

  removeClassFromElements(unsectionL1, "rightToLeft");
  removeClassFromElements(unsectionL2, "rightToLeft");
  removeClassFromElements(unsectionL3, "rightToLeft");
  removeClassFromElements(unsectionL4, "rightToLeft");
  removeClassFromElements(unsectionL5, "rightToLeft");
  removeClassFromElements(unsectionL6, "rightToLeft");
  removeClassFromElements(unsectionL7, "rightToLeft");

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

  if (!o5.classList.contains("active")) {
    //make the other content boxes disappear
    conContainer03.classList.add("disappear");
    conContainer04.classList.add("disappear");
    conContainerO2.classList.add("disappear");
  }

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

  removeClassFromElements(sec1, "leftToRight");
  removeClassFromElements(sec2, "leftToRight");
  removeClassFromElements(sec3, "leftToRight");
  removeClassFromElements(sec4, "leftToRight");
  removeClassFromElements(sec5, "leftToRight");
  removeClassFromElements(sec6, "leftToRight");
  removeClassFromElements(sec7, "leftToRight");

  removeClassFromElements(unsectionR1, "leftToRight");
  removeClassFromElements(unsectionR2, "leftToRight");
  removeClassFromElements(unsectionR3, "leftToRight");
  removeClassFromElements(unsectionR4, "leftToRight");
  removeClassFromElements(unsectionR5, "leftToRight");
  removeClassFromElements(unsectionR6, "leftToRight");
  removeClassFromElements(unsectionR7, "leftToRight");

  removeClassFromElements(unsectionL1, "rightToLeft");
  removeClassFromElements(unsectionL2, "rightToLeft");
  removeClassFromElements(unsectionL3, "rightToLeft");
  removeClassFromElements(unsectionL4, "rightToLeft");
  removeClassFromElements(unsectionL5, "rightToLeft");
  removeClassFromElements(unsectionL6, "rightToLeft");
  removeClassFromElements(unsectionL7, "rightToLeft");

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
      window.addEventListener("scroll", show1);

      function show1() {
        //SCROLL VARIABLES ARE FROM CHATGPT
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent1 = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercent1 >= 25) {
          sec1[0].classList.add("leftToRight");
        }
        if (scrollPercent1 >= 30) {
          sec2[0].classList.add("leftToRight");
        }
        if (scrollPercent1 >= 35) {
          sec3[0].classList.add("leftToRight");
          //window.removeEventListener("scroll", show1);
        }
      }
    } else {
      console.log("reveal for desktop");
      window.addEventListener("scroll", show2);

      function show2() {
        //SCROLL VARIABLES ARE FROM CHATGPT
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent2 = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercent2 >= 20) {
          unsectionL1[0].classList.add("rightToLeft");
          unsectionR1[0].classList.add("leftToRight");
        }
        if (scrollPercent2 >= 25) {
          unsectionL2[0].classList.add("rightToLeft");
          unsectionR2[0].classList.add("leftToRight");
        }
        if (scrollPercent2 >= 30) {
          unsectionL3[0].classList.add("rightToLeft");
          unsectionR3[0].classList.add("leftToRight");
          //window.removeEventListener("scroll", show2);
        }
      }
    }
  } else if (conContainer03.classList.contains("content_box")) {
    console.log("conContainer03 revealed");
    if (window.matchMedia("(max-width: 800px)").matches) {
      console.log("reveal for mobil");
      window.addEventListener("scroll", show3);

      function show3() {
        //SCROLL VARIABLES ARE FROM CHATGPT
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent3 = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercent3 >= 25) {
          sec1[1].classList.add("leftToRight");
        }
        if (scrollPercent3 >= 30) {
          sec2[1].classList.add("leftToRight");
        }
        if (scrollPercent3 >= 35) {
          sec3[1].classList.add("leftToRight");
        }
        if (scrollPercent3 >= 40) {
          sec4[0].classList.add("leftToRight");
        }
        if (scrollPercent3 >= 45) {
          sec5[0].classList.add("leftToRight");
        }
        if (scrollPercent3 >= 50) {
          sec6[0].classList.add("leftToRight");
          //window.removeEventListener("scroll", show3);
        }
      }
    } else {
      console.log("reveal for desktop");
      window.addEventListener("scroll", show4);

      function show4() {
        //SCROLL VARIABLES ARE FROM CHATGPT
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent4 = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercent4 >= 20) {
          unsectionL1[1].classList.add("rightToLeft");
          unsectionR1[1].classList.add("leftToRight");
        }
        if (scrollPercent4 >= 25) {
          unsectionL2[1].classList.add("rightToLeft");
          unsectionR2[1].classList.add("leftToRight");
        }
        if (scrollPercent4 >= 30) {
          unsectionL3[1].classList.add("rightToLeft");
          unsectionR3[1].classList.add("leftToRight");
        }
        if (scrollPercent4 >= 35) {
          unsectionL4[0].classList.add("rightToLeft");
          unsectionR4[0].classList.add("leftToRight");
        }
        if (scrollPercent4 >= 40) {
          unsectionL5[0].classList.add("rightToLeft");
          unsectionR5[0].classList.add("leftToRight");
        }
        if (scrollPercent4 >= 45) {
          unsectionL6[0].classList.add("rightToLeft");
          unsectionR6[0].classList.add("leftToRight");
          //window.removeEventListener("scroll", show4);
        }
      }
    }
  } else if (conContainer04.classList.contains("content_box")) {
    console.log("conContainer04 revealed");
    if (window.matchMedia("(max-width: 800px)").matches) {
      console.log("reveal for mobil");
      window.addEventListener("scroll", show5);

      function show5() {
        //SCROLL VARIABLES ARE FROM CHATGPT
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent5 = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercent5 >= 25) {
          sec1[2].classList.add("leftToRight");
        }
        if (scrollPercent5 >= 30) {
          sec2[2].classList.add("leftToRight");
        }
        if (scrollPercent5 >= 35) {
          sec3[2].classList.add("leftToRight");
        }
        if (scrollPercent5 >= 40) {
          sec4[1].classList.add("leftToRight");
        }
        if (scrollPercent5 >= 45) {
          sec5[1].classList.add("leftToRight");
        }
        if (scrollPercent5 >= 50) {
          sec6[1].classList.add("leftToRight");
          // window.removeEventListener("scroll", show3);
        }
      }
    } else {
      console.log("reveal for desktop");
      window.addEventListener("scroll", show6);

      function show6() {
        //SCROLL VARIABLES ARE FROM CHATGPT
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent6 = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercent6 >= 20) {
          unsectionL1[2].classList.add("rightToLeft");
          unsectionR1[2].classList.add("leftToRight");
        }
        if (scrollPercent6 >= 25) {
          unsectionL2[2].classList.add("rightToLeft");
          unsectionR2[2].classList.add("leftToRight");
        }
        if (scrollPercent6 >= 30) {
          unsectionL3[2].classList.add("rightToLeft");
          unsectionR3[2].classList.add("leftToRight");
        }
        if (scrollPercent6 >= 35) {
          unsectionL4[1].classList.add("rightToLeft");
          unsectionR4[1].classList.add("leftToRight");
        }
        if (scrollPercent6 >= 40) {
          unsectionL5[1].classList.add("rightToLeft");
          unsectionR5[1].classList.add("leftToRight");
        }
        if (scrollPercent6 >= 45) {
          unsectionL6[1].classList.add("rightToLeft");
          unsectionR6[1].classList.add("leftToRight");
          //window.removeEventListener("scroll", show4);
        }
      }
    }
  } else if (conContainer05.classList.contains("content_box")) {
    console.log("conContainer05 revealed");
    if (window.matchMedia("(max-width: 800px)").matches) {
      console.log("reveal for mobil");
      window.addEventListener("scroll", show7);

      function show7() {
        //SCROLL VARIABLES ARE FROM CHATGPT
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent7 = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercent7 >= 25) {
          sec1[3].classList.add("leftToRight");
        }
        if (scrollPercent7 >= 30) {
          sec2[3].classList.add("leftToRight");
        }
        if (scrollPercent7 >= 35) {
          sec3[3].classList.add("leftToRight");
        }
        if (scrollPercent7 >= 40) {
          sec4[2].classList.add("leftToRight");
        }
        if (scrollPercent7 >= 45) {
          sec5[2].classList.add("leftToRight");
        }
        if (scrollPercent7 >= 50) {
          sec6[2].classList.add("leftToRight");
        }
        if (scrollPercent7 >= 55) {
          sec7[0].classList.add("leftToRight");
          //window.removeEventListener("scroll", show7);
        }
      }
    } else {
      console.log("reveal for desktop");
      window.addEventListener("scroll", show8);

      function show8() {
        //SCROLL VARIABLES ARE FROM CHATGPT
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent8 = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercent8 >= 20) {
          unsectionL1[3].classList.add("rightToLeft");
          unsectionR1[3].classList.add("leftToRight");
        }
        if (scrollPercent8 >= 25) {
          unsectionL2[3].classList.add("rightToLeft");
          unsectionR2[3].classList.add("leftToRight");
        }
        if (scrollPercent8 >= 30) {
          unsectionL3[3].classList.add("rightToLeft");
          unsectionR3[3].classList.add("leftToRight");
        }
        if (scrollPercent8 >= 35) {
          unsectionL4[2].classList.add("rightToLeft");
          unsectionR4[2].classList.add("leftToRight");
        }
        if (scrollPercent8 >= 40) {
          unsectionL5[2].classList.add("rightToLeft");
          unsectionR5[2].classList.add("leftToRight");
        }
        if (scrollPercent8 >= 45) {
          unsectionL6[2].classList.add("rightToLeft");
          unsectionR6[2].classList.add("leftToRight");
        }
        if (scrollPercent8 >= 50) {
          unsectionL7[0].classList.add("rightToLeft");
          unsectionR7[0].classList.add("leftToRight");
          //window.removeEventListener("scroll", show8);
        }
      }
    }
  }
}

//BACK BUTTON CODE
const back = document.querySelector("#backbutton");

window.addEventListener("scroll", show9);

function show9() {
  timeoutId = setTimeout(() => {
    // SCROLL VARIABLES ARE FROM CHATGPT
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercent9 = (scrollTop / (documentHeight - windowHeight)) * 100;

    if (scrollPercent9 > 25) {
      console.log("appear");
      back.classList.remove("hide");

      back.offsetWidth;
      back.classList = "appear";
    }
    if (scrollPercent9 <= 20) {
      console.log("disappear");
      back.offsetWidth;
      back.classList.add("disappear");
      back.classList.remove("appear");
      back.addEventListener("animationend", disappear);

      function disappear() {
        back.removeEventListener("animationend", disappear);
      }
    }
  }, 100);
}

//Sound
const wav1 = document.querySelector("#wav1");
const wav2 = document.querySelector("#wav2");

o2.addEventListener("click", () => {
  if (!o2.classList.contains("active")) {
    if (Math.random() < 0.5) {
      console.log("wav1");
      wav1.volume = 0.3;
      wav1.play();
    } else {
      console.log("wav2");
      wav2.play();
      wav2.volume = 0.7;
    }
  } else {
    console.log("no sound");
  }
});

o3.addEventListener("click", () => {
  if (!o3.classList.contains("active")) {
    if (Math.random() < 0.5) {
      console.log("wav1");
      wav1.volume = 0.3;
      wav1.play();
    } else {
      console.log("wav2");
      wav2.play();
      wav2.volume = 0.7;
    }
  } else {
    console.log("no sound");
  }
});
o4.addEventListener("click", () => {
  if (!o4.classList.contains("active")) {
    if (Math.random() < 0.5) {
      console.log("wav1");
      wav1.volume = 0.3;
      wav1.play();
    } else {
      console.log("wav2");
      wav2.play();
      wav2.volume = 0.7;
    }
  } else {
    console.log("no sound");
  }
});
o5.addEventListener("click", () => {
  if (!o5.classList.contains("active")) {
    if (Math.random() < 0.5) {
      console.log("wav1");
      wav1.volume = 0.3;
      wav1.play();
    } else {
      console.log("wav2");
      wav2.play();
      wav2.volume = 0.7;
    }
  } else {
    console.log("no sound");
  }
});
