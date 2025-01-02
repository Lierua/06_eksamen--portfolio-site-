//Alt JAVA er fra ChatGPT

function toggleMenu(menuType) {
  let nav, burgerButton;

  if (menuType === "menu1") {
    nav = document.querySelector("nav"); // Assign a unique class to the first nav
    burgerButton = document.querySelector(".burger-menu");
  } else if (menuType === "menu2") {
    nav = document.querySelector(".navmono"); // Assign a unique class to the second nav
    burgerButton = document.querySelector(".burger-menumono");
  }

  if (nav && burgerButton) {
    nav.classList.toggle("active");
    burgerButton.classList.toggle("open");

    if (nav.classList.contains("active")) {
      nav.style.display = "block";
      setTimeout(() => {
        nav.style.transform = "translateX(0)";
      }, 10); // Small delay for smooth animation
    } else {
      nav.style.transform = "translateX(100%)";
      setTimeout(() => {
        nav.style.display = "none";
      }, 300); // Matches the transition duration
    }
  }
}

//Fullsize imgage
// Get the lightbox and the image elements
const lightbox = document.getElementById("lightbox");
const fullImage = document.getElementById("full-image");
const thumbnails = document.querySelectorAll(".thumbnail");
const closeBtn = document.querySelector(".close");

// Add click event to all thumbnails
thumbnails.forEach(function (thumbnail) {
  thumbnail.addEventListener("click", function () {
    lightbox.style.display = "flex"; // Show the lightbox
    fullImage.src = this.src; // Set the full image source
  });
});

// Close the lightbox when clicking the close button
closeBtn.addEventListener("click", function () {
  lightbox.style.display = "none"; // Hide the lightbox
});

// Optionally, close lightbox when clicking outside the image
lightbox.addEventListener("click", function (event) {
  if (event.target !== fullImage) {
    lightbox.style.display = "none"; // Hide lightbox if not clicking the image
  }
});
