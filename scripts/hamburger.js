// Hamburger menu made with this: https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0

var navbar = document.querySelector(".navbar");
var ham = document.querySelector(".ham");

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger() {
  navbar.classList.toggle("showNav");
  ham.classList.toggle("showClose");
}

ham.addEventListener("click", toggleHamburger);

// toggle when clicking on links

// METHOD 1
var menuLinks = document.querySelectorAll(".menuLink");
menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("click", toggleHamburger);
});

// METHOD 2

// used event delegation to not have to add a listener to every link
// learnt event delegation from @coderarchive
// https://dev.to/coderarchive/event-delegation-in-js-1aff
// comment METHOD 1 & uncomment the following to try METHOD 2

/*

function checkToggle(e){
  var itemClicked = e.target
  if (itemClicked.classList.contains("menuLink")) {
    toggleHamburger()
  }
}

navbar.addEventListener("click", checkToggle)

*/
