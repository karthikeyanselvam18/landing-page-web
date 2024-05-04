const features = document.querySelectorAll(".card");

features.forEach((feature, index) => {
  let animation;
  switch (index % 2) {
    case 0:
      animation = "fade-left";
      break;
    case 1:
      animation = "fade-right";
      break;
  }
  feature.setAttribute("data-aos", animation);
});

const testimonials = document.querySelectorAll(".testimonial");
testimonials.forEach((testimonial) => {
  let animation = "zoom-in";
  testimonial.setAttribute("data-aos", animation);
});
AOS.init();

const burger = document.querySelector("#burger");
const nav = document.querySelector("nav");

burger.addEventListener("change", () => {
  const isNavOpened = burger.checked;
  nav.style.transform = isNavOpened ? "scaleY(1)" : "scaleY(0)";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    nav.style.transform = "scaleY(1)";
    burger.checked = false;
  } else {
    nav.style.transform = "scaleY(0)";
    burger.checked = false;
  }
});
