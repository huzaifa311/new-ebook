document.getElementById("heroform").addEventListener("submit", onsubmission)
document.getElementById("contactform").addEventListener("submit", onsubmission)
document.getElementById("modalform").addEventListener("submit", onsubmission)

async function onsubmission(e) {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const service = e.target.service.value;
  const manuscript = e.target.manuscript.value;
  const phone = e.target.phone.value;

  const objToSend = {
    name,
    email,
    phone,
    service,
    manuscript,
    submitted_at: new Date().toLocaleString()
  }

  try {
    await fetch("https://form-submission-google-sheet.vercel.app/publishyourebook/offer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objToSend),
    });
    e.target.reset();
    console.log(objToSend);
    
    alert("Form Submitted Successfully");
  } catch (error) {
    console.error("Error during API call:", error);
    alert("An error occurred while submitting the form. Please try again.");
  }
}

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
document.addEventListener("DOMContentLoaded", openModal)

const waText = document.getElementById("wa-icon-text");
const waLogo = document.getElementById("wa-logo");

if (waText && waLogo) {
  const setText = (text) => { waText.textContent = text; };

  waLogo.addEventListener("mouseenter", () => setText("Whatsapp"));
  waLogo.addEventListener("mouseleave", () => setText("Contact Us"));
}

const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("ghgf");

    // Remove active class from all buttons and panels
    tabButtons.forEach((btn) => {
      btn.classList.remove("active", "text-white", "bg-[var(--theme)]");
      btn.classList.add("text-gray-700", "bg-gray-300");
    });
    tabPanels.forEach((panel) => panel.classList.add("hidden"));

    // Add active class to the clicked button and corresponding panel
    const targetPanel = document.getElementById(
      button.getAttribute("data-tab")
    );
    targetPanel.classList.remove("hidden");
    button.classList.add("active", "text-white", "bg-[var(--theme)]");
    button.classList.remove("text-gray-700", "bg-gray-300");
  });
});