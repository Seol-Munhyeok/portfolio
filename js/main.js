// main.js
/* 섹션 화면 올라오는 효과*/
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

/* 모바일 화면에서 토글 구현 */
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

/* 이미지 슬라이더 */
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

    function startAutoSlide() {
      return setInterval(() => {
        index = (index + 1) % images.length;
        updateSlider();
      }, 6000); // 6초마다 넘김
    }

    let autoSlideInterval = startAutoSlide();

    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      autoSlideInterval = startAutoSlide();
    }

    prevBtn.addEventListener('click', () => {
      index = (index - 1 + images.length) % images.length;
      updateSlider();
      resetAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
      index = (index + 1) % images.length;
      updateSlider();
      resetAutoSlide();
    });
  });
});

/* 개발 동기에서 화살표로 이미지 보이게 하기 */
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = { threshold: 0.5 };
  const processSection = document.querySelector('.process-flow');
  const arrow = document.querySelector('.process-arrow');
  const afterStep = document.querySelector('.process-step.after');

  if (processSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          arrow.style.opacity = 1;
          setTimeout(() => {
            afterStep.classList.remove('hidden');
          }, 600);
        }
      });
    }, observerOptions);

    observer.observe(processSection);
  }
});
