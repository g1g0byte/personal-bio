
// Hide scrollbar on scroll down
let full_mobile_nav = false
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (full_mobile_nav !== true) {
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
            document.getElementById("navbar__Items__wrapper").className = "navbar__Items"
        } else {
            document.getElementById("navbar").style.top = "-200px";
            document.getElementById("navbar__Items__wrapper").className = "navbar__Items"
        }
    }
    prevScrollpos = currentScrollPos;
}

// toggles nav bar based on screen size
function toggleMobileNav() {
    const navs = document.querySelectorAll('.navbar__Items')
    navs.forEach(nav => nav.classList.toggle('navbar__ToggleShow'));
}

document.querySelector('.navbar__Link-toggle')
    .addEventListener('click', () => {
        toggleMobileNav();
        toggleNavScrollDisappear();
    });

const toggleNavScrollDisappear = () => {
    if (full_mobile_nav === false) {
        full_mobile_nav = true
    } else {
        full_mobile_nav = false
    }
}

const enableNavScrollDisappear = () => { full_mobile_nav = false }