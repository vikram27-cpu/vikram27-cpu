// Close the banner

const closeButton = document.querySelector(".close");
const banner = document.querySelector(".banner");

closeButton.addEventListener("click", function () {
    banner.style.display = "none";
});


// Simple search button

const searchButton = document.querySelector(".search");

searchButton.addEventListener("click", function () {
    alert("Search button clicked!");
});
