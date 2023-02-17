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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
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
