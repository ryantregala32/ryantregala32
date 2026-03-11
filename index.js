/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

document.addEventListener("DOMContentLoaded", function() {

const roles = [
  "Game Developer",
  "Gameplay Programmer",
  "Cognitive Science @ UC San Diego",
  "UI / UX Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
  if (!typingElement) return;

  let currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex++);
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex--);
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentRole.length + 1) {
    speed = 1500;
    isDeleting = true;
  } 
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

});


const screenshot = document.getElementById('project-screenshot');
const trailer = document.getElementById('project-trailer');
const button = document.getElementById('switch-button');

button.addEventListener('click', () => {
  if (screenshot.style.display !== 'none') {
    screenshot.style.opacity = 0;
    setTimeout(() => {
      screenshot.style.display = 'none';
      trailer.style.display = 'block';
      trailer.style.opacity = 0;
      setTimeout(() => { trailer.style.opacity = 1; }, 50);
    }, 500);
    button.innerHTML = '&#8592;';
  } else {
    trailer.style.opacity = 0;
    setTimeout(() => {
      trailer.style.display = 'none';
      screenshot.style.display = 'block';
      screenshot.style.opacity = 0;
      setTimeout(() => { screenshot.style.opacity = 1; }, 50);
    }, 500);
    button.innerHTML = '&#8594;';
  }
});
