let mobileMenu = document.getElementById("mobileMenu");

function handleMobileMenu() {
  if (mobileMenu.classList.contains("!h-0")) {
    // If currently collapsed (!h-0), open it (!h-96)
    mobileMenu.classList.remove("!h-0", "!overflow-hidden");
    mobileMenu.classList.add("!h-96", "!overflow-visible");
  } else if (mobileMenu.classList.contains("!h-96")) {
    // If currently open (!h-96), collapse it (!h-0)
    mobileMenu.classList.remove("!h-96", "!overflow-visible");
    mobileMenu.classList.add("!h-0", "!overflow-hidden");
  } else {
    // If neither class is present, default to opening it
    mobileMenu.classList.add("!h-96", "!overflow-visible");
  }
}

let dropCont = document.getElementById("dropCont");
let dropMob = document.getElementById("dropMob");

dropCont.addEventListener("click", () => {
  if (dropMob.classList.contains("!hidden")) {
    dropMob.classList.remove("!hidden");
    dropMob.classList.add("!flex");
  } else if (dropMob.classList.contains("!flex")) {
    dropMob.classList.remove("!flex");
    dropMob.classList.add("!hidden");
  } else {
    // If neither class is present, you can choose to add one by default.
    dropMob.classList.add("!flex");
  }
});

function toggleFAQ(faqId) {
  // Get the clicked FAQ answer and icon
  const answerToToggle = document.getElementById(`faq-${faqId}`);
  const iconToToggle = document.getElementById(`icon-${faqId}`);

  // Get all FAQ answers and icons
  const allAnswers = document.querySelectorAll('.faq-answer');
  const allIcons = document.querySelectorAll('.faq-item span[id^="icon-"]');

  // Close all other FAQ answers and reset their icons
  allAnswers.forEach(answer => {
      if (answer !== answerToToggle) {
          answer.classList.remove('open');
      }
  });

  allIcons.forEach(icon => {
      if (icon !== iconToToggle) {
          icon.textContent = '+';
      }
  });

  // Toggle the clicked FAQ
  if (answerToToggle.classList.contains('open')) {
      // If it's already open, close it
      answerToToggle.classList.remove('open');
      iconToToggle.textContent = '+';
  } else {
      // If it's closed, open it
      answerToToggle.classList.add('open');
      iconToToggle.textContent = '-';
  }
}
