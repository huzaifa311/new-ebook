document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 0,
        loop: false,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 0 },
          640: { slidesPerView: 2, spaceBetween: 0 },
          1024: { slidesPerView: 4, spaceBetween: 0 },
        },
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper2", {
        slidesPerView: 2,
        spaceBetween: 16,
        loop: true,
        autoplay: {
          delay: 300000000000000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 2 },
          640: { slidesPerView: 1, spaceBetween: 2 },
          1024: { slidesPerView: 2, spaceBetween: 16 },
        },
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper3", {
        slidesPerView: 1,
        spaceBetween: 5,
        loop: false,
        autoplay: {
          delay: 300000000000000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 5 },
          640: { slidesPerView: 1, spaceBetween: 5 },
          1024: { slidesPerView: 1, spaceBetween: 5 },
        },
    });
});