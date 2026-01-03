const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    576: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
});

const carousel = document.querySelector(".logo-partenaire");

// récupère le contenu actuel tous les <figure> et le duplique
const content = carousel.innerHTML;
carousel.innerHTML += content;
