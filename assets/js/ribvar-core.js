// navbar
const navContainer = document.querySelector(".nav-container");
const navToggle = document.querySelector(".nav-toggle");
const navClose = document.querySelector(".nav-close");

navToggle.addEventListener("click", () => {
  navContainer.classList.remove("hidden", "slide-out");
  navContainer.classList.add("slide-in");
});

navClose.addEventListener("click", () => {
  navContainer.classList.remove("slide-in");
  navContainer.classList.add("slide-out");
  setTimeout(() => {
    navContainer.classList.add("hidden");
  }, 300); // Match the duration of the slide-out animation
});
window.addEventListener("resize", () => {
  navContainer.classList.add("hidden");
});
window.addEventListener("load", () => {
  navContainer.classList.add("hidden");
});

// index (homepage) swipers
var swiper = new Swiper(".airSwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

var swiper = new Swiper(".tourSwiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-button-next-tour",
    prevEl: ".swiper-button-prev-tour",
  },
  pagination: {
    el: ".swiper-pagination-tour",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 480 / 350,
    },
    640: {
      slidesPerView: 640 / 350,
    },
    800: {
      slidesPerView: 800 / 350,
    },
    1024: {
      slidesPerView: 1024 / 350,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper(".heroSwiper", {
  cssMode: true,
  pagination: {
    el: ".swiper-pagination-hero",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

// articles swiper
var swiper = new Swiper(".articlesSwiper", {
  cssMode: true,
  pagination: {
    el: ".articlesSwiper .swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

// article and tours dropdown
const dropdownBtn = document.getElementById("filterButton");
dropdownBtn.addEventListener("click", function () {
  const dropdown = document.getElementById("filterDropdown");

  if (dropdown.classList.contains("move-in")) {
    dropdown.classList.remove("move-in");
    dropdown.classList.add("move-out");
    setTimeout(() => {
      dropdown.classList.toggle("hidden");
    }, 300); // Match the duration of the move-out animation
  } else {
    dropdown.classList.remove("move-out");
    dropdown.classList.add("move-in");
    setTimeout(() => {
      dropdown.classList.toggle("hidden");
    }, 300); // Match the duration of the move-out animation
  }
  if (dropdownBtn.childNodes[1].classList.contains("rotate-0")) {
    dropdownBtn.childNodes[1].classList.remove("rotate-0");
    dropdownBtn.childNodes[1].classList.add("rotate-180");
  } else {
    dropdownBtn.childNodes[1].classList.add("rotate-0");
    dropdownBtn.childNodes[1].classList.remove("rotate-180");
  }
});

// for tour prpId
const tourDaysElements = document.querySelectorAll(".tour-days");
const tourNightsElements = document.querySelectorAll(".tour-nights");

tourDaysElements.forEach((tourDays) => {
  tourDays.innerText = tourDays.innerText.split(" و ")[1];
});
tourNightsElements.forEach((tourNights) => {
  tourNights.innerText = tourNights.innerText.split(" و ")[0];
});

const tourPriceElements = document.querySelectorAll(".tour-price");
tourPriceElements.forEach((price) => {
  price.textContent = price.textContent.replace(/ تومان/g, "");
});

// pagination in tours page and magazines page
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const currentPage = params.get("pageno");
  if (currentPage) {
    const pageLinks = document.querySelectorAll(".page-number");

    pageLinks.forEach((link) => {
      if (link.innerText.toString() === currentPage.toString()) {
        link.classList.add("bg-rbvblue");
        link.classList.remove("bg-rbvhelpersecondary");
      }
    });
  }
});
