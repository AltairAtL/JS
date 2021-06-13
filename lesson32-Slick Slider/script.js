let swiper = new Swiper(".swiper-container", {
  slidesPerView: 2.5,
  spaceBetween: 44,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  removeClippedSubviews: false,
});
