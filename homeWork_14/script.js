const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const back = document.querySelector(".btn-back");
const next = document.querySelector(".btn-next");
const dotsContainer = document.querySelector(".dots-container");

let current = 0;

slides.forEach((_, i) => {
  const dot = document.createElement("div");

  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.dataset.index = i;
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.classList.toggle("hidden", i !== index);
    dots[i].classList.toggle("active", i === index);
  });

  back.classList.toggle("inactive", index === 0);
  next.classList.toggle("inactive", index === slides.length - 1);
};

showSlide(current);

slider.addEventListener("click", (event) => {
  if (event.target === back && current > 0) {
    current--;
    showSlide(current);
  }

  if (event.target === next && current < slides.length - 1) {
    current++;
    showSlide(current);
  }
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    current = Number(dot.dataset.index);
    showSlide(current);
  });
});
