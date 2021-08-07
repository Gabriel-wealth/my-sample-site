// setting the year
document.getElementById("date").textContent = new Date().getFullYear();

// about section
const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// services slides
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const slides = document.querySelectorAll(".slide");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

count = 0;
nextBtn.addEventListener("click", function () {
  count++;
  console.log(slides[2]);
  displaySlide();
});
prevBtn.addEventListener("click", function () {
  count--;
  console.log(count);
  displaySlide();
});

function displaySlide() {
  if (count < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (count > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
}
prevBtn.style.display = "none";

// fixed nav abr
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  // if(scrollHeight>navHeight){
  //     navbar.classList.add('fixed-nav');

  // }
  // else {
  //     navbar.classList.remove('fixed-nav')
  // }

  if (scrollHeight > 700) {
    topLink.style.visibility = "visible";
  } else {
    topLink.style.visibility = "hidden";
  }
});

// show top-link arrow

// home slider
const homeSlider = document.querySelector(".home-slider");
const homeSlides = document.querySelectorAll(".home-slide");
var numberOfSlides = homeSlides.length;
var slideNumber = 0;

function repeatSlide() {
  setInterval(function () {
    homeSlides.forEach(function (slide) {
      slide.classList.remove("active");
    });
    slideNumber++;
    if (slideNumber > numberOfSlides - 1) {
      slideNumber = 0;
    }
    homeSlides[slideNumber].classList.add("active");
  }, 4000);
}
repeatSlide();
