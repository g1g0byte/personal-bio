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

const navbar_items = document.querySelectorAll(".navbar__Items")

function toggleMobileNav() {
    navbar_items.forEach(navbar_items => navbar_items.classList.toggle("navbar__ToggleShow"));
}

document.querySelector(".navbar__Link-toggle")
    .addEventListener("click", () => {
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

// Toggling title gradient animation //
const title = document.getElementById("title");

function toggleGradient() {
    if (title.classList.contains("gradientAnimation")) {
        title.classList.remove("gradientAnimation")
        localStorage.setItem("gradient", false)
    }
    else {
        title.classList.add("gradientAnimation")
        localStorage.setItem("gradient", true)
    }
}

// check if gradient should be off on start
if (JSON.parse(localStorage.getItem("gradient")) == false) {
    title.classList.remove("gradientAnimation")
}

// Theme switching //
const toggleSwitch = document.getElementById("theme-switch-checkbox");

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}