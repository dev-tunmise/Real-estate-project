const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
const closeMenu = document.getElementById('close-menu')
const overlay = document.getElementById('overlay')

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove("-translate-x-[110%]", "opacity-0");
    mobileMenu.classList.add("translate-x-0", "opacity-100");

    overlay.classList.remove("opacity-0", "pointer-events-none");
    overlay.classList.add("opacity-100", "pointer-events-auto");
    });

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove("translate-x-0", "opacity-100");
    mobileMenu.classList.add("-translate-x-[110%]", "opacity-0");

    overlay.classList.add("opacity-0", "pointer-events-none");
    overlay.classList.remove("opacity-100", "pointer-events-auto");
    });

overlay.addEventListener('click', () => {
    mobileMenu.classList.remove("translate-x-0", "opacity-100");
    mobileMenu.classList.add("-translate-x-[110%]", "opacity-0");

    overlay.classList.add("opacity-0", "pointer-events-none");
    overlay.classList.remove("opacity-100", "pointer-events-auto");
    });
