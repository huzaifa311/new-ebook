const marquee = document.querySelector(".marquee");
const clone = marquee.innerHTML;
marquee.innerHTML += clone;

gsap.to(".marquee", {
  x: "-50%",
  ease: "linear",
  duration: 10,
  repeat: -1
});

document.addEventListener("DOMContentLoaded", function () {
  const emblaNode = document.querySelector(".books");
  const options = { loop: true, align: "start", speed: 15 };
  const embla = EmblaCarousel(emblaNode, options);

  function autoSlide() {
    embla.scrollNext();
  }
  setInterval(autoSlide, 1500);
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper3", {
    slidesPerView: 4,
    spaceBetween: 6,
    loop: true,
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
      320: { slidesPerView: 1, spaceBetween: 20 },
      640: { slidesPerView: 2, spaceBetween: 3 },
      1024: { slidesPerView: 4, spaceBetween: 5 },
    },
  });
});

const openModalBtns = document.getElementsByClassName("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modalOverlay");
const modal = document.getElementById("myModal");

function openModal() {
  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.add("show");
    document.body.style.overflowY = "hidden"
  }, 10);
}

function closeModal() {
  modal.classList.remove("show"); 
  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflowY = "visible"
  }, 300);
}

for (let i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener("click", openModal);
}

closeModalBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);


var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/67a26212825083258e1005a0/1ij94u6eq';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();