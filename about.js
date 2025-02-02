// FROM CHATGPT

const images = document.querySelectorAll(".clickableImage"); // Select all images
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const overlay = document.getElementById("overlay");

// Show popup when clicking an image
images.forEach((image) => {
  image.addEventListener("click", () => {
    // Set text from the data-text attribute of the clicked image
    popupText.textContent = image.getAttribute("data-text");
    popup.style.display = "block";
    overlay.style.display = "block";
  });
});

// Hide popup when clicking outside of it
overlay.addEventListener("click", () => {
  popup.style.display = "none";
  overlay.style.display = "none";
});
