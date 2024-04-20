const slides = document.querySelector('.slides');
let currentSlide = 0;

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.children.length) {
      currentSlide = 0;
    }
    slides.style.transform = `translateX(-${currentSlide * 40}%)`;
  }

setInterval(nextSlide, 2000);
