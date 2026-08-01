/*=========================
    MOBILE MENU
=========================*/

const menuBtn = document.createElement("button");
menuBtn.className = "menu-btn";
menuBtn.setAttribute("aria-label", "Toggle navigation menu");
menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

if (navbar && navLinks) {
    navbar.appendChild(menuBtn);

    const menuIcon = menuBtn.querySelector("i");

    const toggleMenu = () => {
        navLinks.classList.toggle("show");
        if (navLinks.classList.contains("show")) {
            menuIcon.className = "fa-solid fa-xmark";
        } else {
            menuIcon.className = "fa-solid fa-bars";
        }
    };

    menuBtn.addEventListener("click", toggleMenu);

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768 && navLinks.classList.contains("show")) {
                toggleMenu();
            }
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && navLinks.classList.contains("show")) {
            navLinks.classList.remove("show");
            menuIcon.className = "fa-solid fa-bars";
        }
    });
}

/*=========================
    STICKY NAVBAR
=========================*/

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (!header) return;
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

/*=========================
    SCROLL REVEAL
=========================*/

const reveals = document.querySelectorAll(
    ".about,.services,.gallery,.pricing,.testimonials,.booking,.contact"
);

const revealSections = () => {
    const trigger = window.innerHeight * 0.85;
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < trigger) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

/*=========================
    SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", event => {
        event.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

/*=========================
    BOOKING FORM
=========================*/

const bookingForm = document.querySelector(".booking-form");
if (bookingForm) {
    bookingForm.addEventListener("submit", event => {
        event.preventDefault();
        alert("🎉 Appointment request received! We'll contact you shortly.");
        bookingForm.reset();
    });
}
