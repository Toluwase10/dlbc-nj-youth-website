

//setup date for footer
let dateYear = document.getElementById("date");

dateYear.innerHTML = new Date().getFullYear();



// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});


