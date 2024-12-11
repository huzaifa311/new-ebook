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
