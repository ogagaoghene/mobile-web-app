const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelectorAll('.intro-card,.intro-cards');
const mobileMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.forEach(n=> n.classList.toggle("bgcolor"))
}

hamburger.addEventListener("click", mobileMenu);

const closeMenu = () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.forEach(n=> n.classList.remove("bgcolor"))
}
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach( n => n.addEventListener("click", closeMenu));



