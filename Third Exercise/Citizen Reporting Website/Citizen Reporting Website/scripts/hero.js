// These image URLs give the hero a fresh, relevant photo on each page load.
const heroImages = [
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=2200&q=85",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2200&q=85",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2200&q=85",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2200&q=85",
  "https://i.guim.co.uk/img/media/2e15ce82f161984268de408c1be365b4a9c0512d/0_1483_3456_2074/master/3456.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=81427d9947af288939beba6b585dd540",
  "https://preview.redd.it/what-are-the-most-things-you-dont-like-about-kasane-teto-v0-iw29mxlnua1g1.jpeg?width=640&crop=smart&auto=webp&s=e6acecfe16b451f6ba69c6f0e5ddcd547e6ef67f"
];

// `document` represents the current webpage, and lets JavaScript find its elements.
// `querySelectorAll` finds every element that matches these CSS selectors.
const heroes = document.querySelectorAll(".hero, .report-hero");

// Pick one image at random and apply it to the hero present on this page.
const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)];
// `forEach` runs this function once for each matching hero element.
heroes.forEach((hero) => {
  // `.style` lets JavaScript read or change an element's inline CSS styles.
  // `setProperty` sets a CSS property by name; here it sets a custom property used by CSS.
  hero.style.setProperty("--hero-image", `url("${randomImage}")`);
});

// const scamTitle; = document.querySelectorAll(".scam-card-title");
// scamTitle.classList.add("title-header");

// const scamTitles = document.querySelectorAll(".scam-card-title");
// scamTitles[2].textContent = "This is a scam title.";

// const reportNumber = document.querySelector("#report-number");
// reportNumber.setAttribute("placeholder", "Teto Invasion");

// const change = document.querySelector(".btn-primary");
// change.textContent = "Click me";

// const heading = document.querySelector("h1");
// heading.style.color = "pink";
// heading.style.fontSize = "40px";
// heading.style.textDecoration = "underline";

const volunteerButton = document.querySelector("#volunteer-button");
volunteerButton.addEventListener("click", () => {
  alert("Volunteer registration will be available soon.");
});

// volunteerButton.addEventListener("click", function(event){
//   event.preventDefault();
//   console.log("Form handled by JavaScript");
// });