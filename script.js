const modeBtn = document.querySelector(".mode-btn");
const mainNav = document.querySelector(".main-nav");
const toggle = document.querySelector("#toggle");
const navBar = document.querySelector(".nav-bar");
const nav = document.querySelector(".nav");
const showMoreBtn = document.querySelector(".show-more-btn");

const darkMode = function () {
  document.querySelector("html").classList.toggle("dark-mode");
  mainNav.classList.toggle("dark-mode");
  modeBtn.src = !mainNav.classList.contains("dark-mode")
    ? "./img/sun.png"
    : "./img/moon.jpg";
  toggle.style.backgroundImage = !mainNav.classList.contains("dark-mode")
    ? "url(./img/toggle.png)"
    : "url(./img/w-toggle.png)";
};

const showHideSideBar = function () {
  navBar.classList.toggle("side-bar");
};

modeBtn.addEventListener("click", darkMode);
toggle.addEventListener("click", showHideSideBar);

nav.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(`${id}`).scrollIntoView({ behavior: "smooth" });
  }
});
showMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#section-2").scrollIntoView({ behavior: "smooth" });
});
