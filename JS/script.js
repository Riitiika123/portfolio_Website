/* ════════════════════════════════════════════
   THEME — runs first, before everything else
════════════════════════════════════════════ */
function applyTheme() {
  const isLight = localStorage.getItem("theme") === "light";

  document.documentElement.classList.toggle("light-mode", isLight);
  document.body.classList.toggle("light-mode", isLight);

  const modeIconNavbar = document.getElementById("mode-icon-navbar");
  const modeIconHamburger = document.getElementById("mode-icon-hamburger");

  if (isLight) {
    modeIconNavbar?.classList.replace("fa-sun", "fa-moon");
    modeIconHamburger?.classList.replace("fa-sun", "fa-moon");
  } else {
    modeIconNavbar?.classList.replace("fa-moon", "fa-sun");
    modeIconHamburger?.classList.replace("fa-moon", "fa-sun");
  }
}

function toggleDarkMode() {
  const isCurrentlyLight = document.body.classList.contains("light-mode");
  localStorage.setItem("theme", isCurrentlyLight ? "dark" : "light");
  applyTheme();
}

// Apply saved theme immediately on every page load
applyTheme();


/* ════════════════════════════════════════════
   HAMBURGER MENU
════════════════════════════════════════════ */
function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}


/* ════════════════════════════════════════════
   GSAP ANIMATIONS
════════════════════════════════════════════ */
gsap.registerPlugin(ScrollTrigger);

gsap.from('nav li', {
  y: -10,
  opacity: 0,
  duration: 0.5,
  delay: 0.3
});

gsap.utils.toArray(
  ".home-page, .about-section, .timeline-section, .projects, .contact-minimal"
).forEach((section) => {
  gsap.from(section.children, {
    opacity: 0,
    y: 60,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    }
  });
});


/* ════════════════════════════════════════════
   TYPING ANIMATION
   Only runs on pages that have #role element
════════════════════════════════════════════ */
const roleElement = document.getElementById("role");

if (roleElement) {
  const roles = ["Web Developer", "Flutter Developer", "Designer"];
  let roleIndex = 0;
  let charIndex = 0;
  const typingSpeed = 50;
  const erasingSpeed = 50;
  const delayBetweenRoles = 1000;

  function typeRole() {
    if (charIndex < roles[roleIndex].length) {
      roleElement.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeRole, typingSpeed);
    } else {
      setTimeout(eraseRole, delayBetweenRoles);
    }
  }

  function eraseRole() {
    if (charIndex > 0) {
      roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseRole, erasingSpeed);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, typingSpeed);
    }
  }

  setTimeout(typeRole, delayBetweenRoles);
}


/* ════════════════════════════════════════════
   CONTACT FORM
   Only runs on pages that have #contactForm
════════════════════════════════════════════ */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Form Submitted:', { name, email, message });
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}