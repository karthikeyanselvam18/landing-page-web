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

const featuresContainer = document.querySelector(".features");
const featureObjs = [
  {
    name: "Personalized Meal Plan",
    desc: "Receive customized weekly meal plans tailored to your dietary preferences and lifestyle, ensuring convenience and satisfaction in every bite.",
    icon: "fa-solid fa-utensils",
  },
  {
    name: "Curated Recipes",
    desc: "Explore a diverse collection of chef-curated recipes, from quick weekday dinners to special occasion dishes, designed to inspire and delight your taste buds.",
    icon: "fas fa-book-open",
  },
  {
    name: "Automated Grocery Lists",
    desc: "Streamline your shopping experience with automated grocery lists generated based on your selected recipes, making meal prep a breeze.",
    icon: "fas fa-shopping-basket",
  },
  {
    name: "Health Tracking",
    desc: "Monitor your nutritional intake and track your progress towards your health goals with built-in tracking tools, empowering you to make informed decisions about your diet.",
    icon: "fas fa-heartbeat",
  },
];

featureObjs.forEach((feature, index) => {
  const card = document.createElement("div");
  card.classList = ["card"];
  const featureContainer = document.createElement("div");
  featuresContainer.appendChild(card);
  featureContainer.className = "feature";
  card.appendChild(featureContainer);
  featureContainer.innerHTML = `<span class="feature-icon">
  <i class="${feature.icon}"></i>
  </span>
  <h1 class="feature-title">${feature.name}</h1>
  <p class="feature-desc">${feature.desc}</p>`;
  let animation;
  switch (index % 2) {
    case 0:
      animation = "fade-left";
      break;
    case 1:
      animation = "fade-right";
      break;
  }
  card.setAttribute("data-aos", animation);
});

const testimonialObj = [
  {
    review:
      "I love how easy it is to plan my meals each week with this service. The recipes are delicious, and the grocery lists make shopping a breeze!",
    name: "Sarah M",
  },
  {
    review:
      "As a busy professional, I appreciate the convenience of having personalized meal plans delivered to my inbox. It's been a game-changer for my cooking routine!",
    name: "John L",
  },
  {
    review:
      "The community aspect of this platform is fantastic. I've connected with so many like-minded individuals and discovered new recipes that I wouldn't have found otherwise.",
    name: "Emily W",
  },
];
const testimonialsContainer = document.querySelector(".testimonials")
testimonialObj.forEach(testimonial=>{
  const testimonialContainer = document.createElement("div")
  testimonialContainer.className = "testimonial"
  testimonialContainer.innerHTML = `
  <p>
    "${testimonial.review}"
  </p>
  <span>- ${testimonial.name}</span>
`
testimonialsContainer.appendChild(testimonialContainer)
let animation = "zoom-in";
testimonialContainer.setAttribute("data-aos", animation);
})

AOS.init();
