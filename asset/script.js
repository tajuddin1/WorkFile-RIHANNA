const nav_links = document.querySelectorAll(".nav-link");
const burger = document.querySelector(".burger");

nav_links.forEach((nav_link) => {
  nav_link.addEventListener("click", (e) => {
    nav_links.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
  });
});

/* burger */
burger.addEventListener("click", () => {
  if (burger.classList.contains("fa-bars")) {
    burger.classList.replace("fa-bars", "fa-times");
  } else {
    burger.classList.replace("fa-times", "fa-bars");
  }
});



window.onscroll = function() {
  var navbar = document.getElementById('navbar');

  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 200) {
    navbar.classList.add('sticky');
  } else {

    navbar.classList.remove('sticky');
  }
};