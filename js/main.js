// main.js
const sections = document.querySelectorAll('.section, .project-section');
const options = { threshold: 0.1 };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav__menu');
  const navLinks = document.querySelectorAll('.nav__link');
  const navClose = document.getElementById('nav-close');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show-menu');
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    });
  }

  if (navClose && navMenu) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const sliderWrappers = document.querySelectorAll('.image-slider__wrapper');

  sliderWrappers.forEach((wrapper) => {
    const track = wrapper.querySelector('.image-slider__track');
    const prevBtn = wrapper.querySelector('.image-slider__btn.prev');
    const nextBtn = wrapper.querySelector('.image-slider__btn.next');
    const images = wrapper.querySelectorAll('.image-slider__track img');
    let index = 0;

    function updateSlider() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
      index = (index - 1 + images.length) % images.length;
      updateSlider();
    });

    nextBtn.addEventListener('click', () => {
      index = (index + 1) % images.length;
      updateSlider();
    });
  });
});
