/*GSAP (for smooth performance) Animation for nav bar */
var tl= gsap.timeline();

tl.from('nav li',{
    y:-10,
    opacity:0,
    duration:0.5,
    delay:1
})

/* Dark mode Toggle */
function toggleDarkMode() {
  // Add classes for both navbar and hamburger dark mode icons
  const modeIconNavbar = document.getElementById("mode-icon-navbar");
  const modeIconHamburger = document.getElementById("mode-icon-hamburger");

  // Toggle dark and light mode for the body
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");

  // Toggle the icon for the navbar section
  if (document.body.classList.contains("dark-mode")) {
      modeIconNavbar.classList.remove("fa-sun");
      modeIconNavbar.classList.add("fa-moon");
      modeIconHamburger.classList.remove("fa-sun");
      modeIconHamburger.classList.add("fa-moon");
  } else {
      modeIconNavbar.classList.remove("fa-moon");
      modeIconNavbar.classList.add("fa-sun");
      modeIconHamburger.classList.remove("fa-moon");
      modeIconHamburger.classList.add("fa-sun");
  }
}

/* Hamburger Icon Menu */
function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}



    //heading - dynamic text
    const roles= [ "Web Developer", "Flutter Developer", " Designer"];
    let roleIndex = 0;
    let charIndex = 0;
    const typingSpeed = 50;
    const erasingSpeed = 50;
    const delayBetweenRoles = 1000; // Time before switching to the next role
    const roleElement = document.getElementById("role");

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
        roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
        setTimeout(typeRole, typingSpeed);
      }
    }
    
    // Start the typing animation
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(typeRole, delayBetweenRoles);
    });

    
    //button
    gsap.from(".home-page button", {
        opacity:0,
        duration:0.5,
        delay:1
    });
    gsap.from(".home-page h1", {
        x:-25,
        opacity:0,
        duration:0.5,
        delay:1
    });
    gsap.from(".home-page h4", {
      x:25,
      opacity:0,
      duration:0.5,
      delay:1
  });
    gsap.from(".home-page img", {
        y:-10,
        opacity:0,
        duration:0.5,
        delay:1
    });

    /* About section */
    gsap.from(".about-section h1",{
        y:-30,
        opacity:0,
        duration:0.5,
        delay:1,
    })
    gsap.from(".about-section h2",{
        x:-50,
        opacity:0,
        duration:0.5,
        delay:1,
    })

/* SKills */

document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.querySelector("#skills");
    const progressBars = document.querySelectorAll(".progress");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            progressBars.forEach((bar) => {
              const width = bar.style.width;
              bar.style.width = "0"; // Start from 0
              gsap.to(bar, { width: width, duration: 1 });
            });
          }
        });
      },
      { threshold: 0.5 }
    );
  
    observer.observe(skillsSection);
  });
  

    /* Projects */
    gsap.from(".projects h1", {
        y:-30,
        opacity:0,
        duration:0.5,
        delay:1,
    });

/*  Contact Page */
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulate form submission (e.g., sending to an API)
  console.log('Form Submitted:', { name, email, message });

  // Show a success message or reset the form
  alert('Thank you for your message! I will get back to you soon.');
  document.getElementById('contactForm').reset();
});
    

