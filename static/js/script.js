// ================================
// Mobile Navigation Menu
// ================================

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});


// ================================
// Active Navigation Link
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ================================
// Scroll Reveal Animation
// ================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});


document.querySelectorAll(
".about-box, .skill-card, .project-card, .certificate, form"
).forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .8s ease";

    observer.observe(item);

});


// ================================
// Typing Effect
// ================================

const typingElement = document.querySelector(".hero-text h2");

const words = [
    "Cyber Security Engineer",
    "Ethical Hacker",
    "Python Developer",
    "Network Security",
    "Penetration Tester"
];

let wordIndex = 0;

function changeWord() {

    typingElement.style.opacity = "0";

    setTimeout(() => {

        typingElement.textContent = words[wordIndex];

        typingElement.style.opacity = "1";

        wordIndex++;

        if(wordIndex >= words.length){
            wordIndex = 0;
        }

    },300);

}

setInterval(changeWord,2500);


// ================================
// Navbar Shadow
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 5px 20px rgba(0,229,255,.25)";

    }
    else{

        header.style.boxShadow="none";

    }

});


// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ================================
// Footer Year
// ================================

const footerText = document.querySelector("footer p");

if(footerText){

    footerText.innerHTML =
    "© " + new Date().getFullYear() +
    " Nikhil | Cyber Security Portfolio";

}

console.log("Portfolio Loaded Successfully");
