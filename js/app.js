const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle('active')
});

const navBar = document.getElementById("navbar")


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    navBar.style.marginTop = "0px";

    navBar.style.transition = "all 0.3s ease-in-out";
  } else {
    navBar.style.marginTop = "40px";

    navBar.style.transition = "all 0.3s ease-in-out";
  }
}