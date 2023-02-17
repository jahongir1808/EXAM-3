let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "images/light.svg";
  } else {
    this.firstElementChild.src = "images/dark.svg";
  }
  document.body.classList.toggle("dark");
});

const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");

document.addEventListener("click", function (e) {
  if (e.target.id !== "sidebar" && e.target.id !== "toggle") {
    toggle.classList.remove("active");
    sidebar.classList.remove("active");
  }
});

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  sidebar.classList.toggle("active");
});

let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.opacity = 1;
  } else {
    backtop.style.opacity = 0;
  }
}

window.addEventListener("scroll", function () {
  toggleBacktop();
});

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

let services__cards = [
  {
    img: "images/services-icon1.svg",
    name: "What I can do for you",
    desc: "Faster, better products that your users love. Here's all the services I provide:",
    lione: "Design Strategy",
    litwo: "Web and Mobile App Design",
    lithree: "Front-end Development",
  },
  {
    img: "images/services-icon2.svg",
    name: "Applications I'm fluent in",
    desc: "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.",
    lione: "Sketch",
    litwo: "Webflow",
    lithree: "Figma",
  },
  {
    img: "images/services-icon3.svg",
    name: "What you can expect",
    desc: "I design products that are more than pretty. I make them shippable and usable.",
    lione: "Clean and functional",
    litwo: "Device and user friendly",
    lithree: "Efficient and maintainable",
  },
];

function getCard(image, name, desc, lione, litwo, lithree) {
  return `
  <div class="services-card">
            <img src="${image}" alt="" />
            <h3>${name}</h3>
            <p>
            ${desc}
            </p>
            <ul>
         
          <li> <img src="images/square-icon.svg" alt="">${lione}</li>
          
          <li> <img src="images/square-icon.svg" alt="">${litwo}</li>
          
          <li> <img src="images/square-icon.svg" alt="">${lithree}</li>
            </ul>
          </div>
  `;
}

let productsContainer = document.querySelector(".services-cards");

function getProducts(products) {
  productsContainer.innerHTML = "";
  for (el of products) {
    productsContainer.innerHTML += getCard(
      el.img,
      el.name,
      el.desc,
      el.lione,
      el.litwo,
      el.lithree
    );
  }
}

getProducts(services__cards);

const project_carousel = document.querySelector(".project-carousel");
const projectCarouselAllItems = document.querySelectorAll(
  ".project_carousel-item"
);
const projectCarouselItems = document.querySelector(".project_carousel-items");
const projectPrevBtn = document.querySelector(".project_carousel-prev");
const projectNextBtn = document.querySelector(".project_carousel-next");

let carouselSlideLength = 2;

const projectCarouselItemsLength = projectCarouselAllItems.length;

const projectCarouselItemsWidth =
  project_carousel.offsetWidth / carouselSlideLength;

projectCarouselItems.style.width =
  projectCarouselItemsLength * projectCarouselItemsWidth + "px";

for (let i = 0; i < projectCarouselItemsLength; i++) {
  projectCarouselAllItems[i].style.width = projectCarouselItemsWidth + "px";
}

const projecStepLength = 1;
const projectStepWidth = projecStepLength * projectCarouselItemsWidth;

let projectCurrentPosition = 0;
let projectLastPosition =
  (projectCarouselItemsLength - carouselSlideLength) *
  projectCarouselItemsWidth;

projectPrevBtn.addEventListener("click", function () {
  projectCurrentPosition -= projectStepWidth;
  if (Math.ceil(projectCurrentPosition) < 0) {
    projectCurrentPosition = projectLastPosition;
  }
  projectCarouselItems.style.transform = `translateX(${-projectCurrentPosition}px)`;
});

projectNextBtn.addEventListener("click", function () {
  projectCurrentPosition += projectStepWidth;
  if (Math.ceil(projectCurrentPosition) > projectLastPosition) {
    projectCurrentPosition = 0;
  }
  projectCarouselItems.style.transform = `translateX(${-projectCurrentPosition}px)`;
});

const indicators = document.querySelector(".indicators");
const show = document.querySelector("#show img");

indicators.addEventListener("click", (event) => {
  let src = event.target.src;
  src && (show.src = src);
});

let experience_card = [
  {
    name: "Stanford University",
    desc: "MSc (Human Computer Interaction)",
    date: "• 2013-2015",
  },
  {
    name: "MIT Summer School",
    desc: "UX Training Bootcamp",
    date: "• 2013-2014",
  },
  {
    name: "California State University",
    desc: "BSc in Software Engineering",
    date: "• 2009-2012",
  },
];

function getExperienceCard(name, desc, date) {
  return `
  <div class="experience_left-card">
  <div class="experience_card-name">
    <h5>${name}</h5>
    <a href="#"><img src="images/work-arrow1.svg" alt="" /></a>
  </div>
  <div class="experience_card-desc">
    <p>${desc}</p>
    <p>${date}</p>
  </div>
</div>
  `;
}

let experienceCardContainer = document.querySelector(".experience_left-cards");

function getExperienceLeftCard(products) {
  experienceCardContainer.innerHTML = "";
  for (el of products) {
    experienceCardContainer.innerHTML += getExperienceCard(
      el.name,
      el.desc,
      el.date
    );
  }
}

getExperienceLeftCard(experience_card);

let experience_right_card = [
  {
    img: "images/work-icon1.svg",
    name: "SpaceFleet",
    desc: "Senior Product Designer",
    date: "• April 2019 - Current",
  },
  {
    img: "images/work-icon2.svg",
    name: "MusicMash",
    desc: "Information Architect",
    date: "• April 2016 - May 2017",
  },
  {
    img: "images/work-icon3.svg",
    name: "Kingdom",
    desc: "UI Designer",
    date: "• April 2016 - May 2017",
  },
];

function getExperienceRightCard(img, name, desc, date) {
  return `
  <div class="experience_right-card">
  <img src="${img}" alt="" />
  <div class="experience_card-content">
    <div class="experience_card-name">
      <h5>${name}</h5>
      <a href="#"><img src="images/work-arrow1.svg" alt="" /></a>
    </div>
    <div class="experience_card-desc">
      <p>${desc}</p>
      <p>${date}</p>
    </div>
  </div>
</div>
  `;
}

let experience_right_cardContainer = document.querySelector(
  ".experience_right-cards"
);

function getExperienceRightCards(products) {
  experience_right_cardContainer.innerHTML = "";
  for (el of products) {
    experience_right_cardContainer.innerHTML += getExperienceRightCard(
      el.img,
      el.name,
      el.desc,
      el.date
    );
  }
}

getExperienceRightCards(experience_right_card);

const testemonial_carousel = document.querySelector(".testemonial_carousel");
const testemonialCarouselAllItems = document.querySelectorAll(
  ".testemonial_carousel-item"
);
const testemonialCarouselItems = document.querySelector(
  ".testemonial_carousel-items"
);
const testemonialPrevBtn = document.querySelector(".testemonial_carousel-prev");
const testemonialNextBtn = document.querySelector(".testemonial_carousel-next");

let testemonialCarouselSlideLength = 1;

const testemonialCarouselItemsLength = testemonialCarouselAllItems.length;

const testemonialCarouselItemsWidth =
  testemonial_carousel.offsetWidth / testemonialCarouselSlideLength;

testemonialCarouselItems.style.width =
  testemonialCarouselItemsLength * testemonialCarouselItemsWidth + "px";

for (let i = 0; i < testemonialCarouselItemsLength; i++) {
  testemonialCarouselAllItems[i].style.width =
    testemonialCarouselItemsWidth + "px";
}

const testemonialStepLength = 1;
const testemonialStepWidth =
  testemonialStepLength * testemonialCarouselItemsWidth;

let testemonialCurrentPosition = 0;
let testemonialLastPosition =
  (testemonialCarouselItemsLength - testemonialCarouselSlideLength) *
  testemonialCarouselItemsWidth;

testemonialPrevBtn.addEventListener("click", function () {
  testemonialCurrentPosition -= testemonialStepWidth;
  if (Math.ceil(testemonialCurrentPosition) < 0) {
    testemonialCurrentPosition = testemonialLastPosition;
  }
  testemonialCarouselItems.style.transform = `translateX(${-testemonialCurrentPosition}px)`;
});

testemonialNextBtn.addEventListener("click", function () {
  testemonialCurrentPosition += testemonialStepWidth;
  if (Math.ceil(testemonialCurrentPosition) > testemonialLastPosition) {
    testemonialCurrentPosition = 0;
  }
  testemonialCarouselItems.style.transform = `translateX(${-testemonialCurrentPosition}px)`;
});

const accordionItems = document.querySelectorAll(".footer_accordion-item");
const accordionHeaders = document.querySelectorAll(".footer_accordion-header");
const itemsLength = accordionItems.length;

for (let i = 0; i < itemsLength; i++) {
  accordionHeaders[i].addEventListener("click", function () {
    const accordionContent = this.nextElementSibling;
    for (let j = 0; j < itemsLength; j++) {
      if (i === j) {
        continue;
      }
      accordionHeaders[j].parentNode.classList.remove("active");
      accordionHeaders[j].nextElementSibling.style.maxHeight = null;
    }
    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
      this.parentNode.classList.remove("active");
    } else {
      this.parentNode.classList.add("active");
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });
}
