const scroll_up_arrow = document.getElementById("scroll-up-arrow");

// Hide navbar on scroll down
const navbar = document.getElementById("navbar");
const navbar_items_wrapper = document.getElementById("navbar__Items__wrapper");
let full_mobile_nav = false
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        showNavBar()
    } else {
        hideNavBar()
    }
    prevScrollpos = currentScrollPos;
}

function showNavBar() {
    navbar.style.top = "0";
    navbar_items_wrapper.className = "navbar__Items"
}

function hideNavBar() {
    navbar.style.top = "-200px";
    navbar_items_wrapper.className = "navbar__Items"
}

const navbar_items = document.querySelectorAll('.navbar__Items')

function toggleMobileNav() {
    navbar_items.forEach(navbar_items => navbar_items.classList.toggle('navbar__ToggleShow'));
}

document.querySelector('.navbar__Link-toggle')
    .addEventListener('click', () => {
        toggleMobileNav();
    });


window.addEventListener("scroll", function () {
    if (window.scrollY < 700) {
        scroll_up_arrow.style.display = "none";
    }
    else {
        scroll_up_arrow.style.display = "block";
    }
}, false);