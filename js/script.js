// toggles nav bar based on screen size
function classToggle() {
    const navs = document.querySelectorAll('.navbar__Items')

    navs.forEach(nav => nav.classList.toggle('navbar__ToggleShow'));
}

document.querySelector('.navbar__Link-toggle')
    .addEventListener('click', classToggle);

// Hide scrollbar on scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-55px";
    }
    prevScrollpos = currentScrollPos;
}