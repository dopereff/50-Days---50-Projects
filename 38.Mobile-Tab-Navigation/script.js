const screens = document.querySelectorAll(".content");
const tabButtons = document.querySelectorAll("nav ul li");

tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    hideAllScreens();
    hideAllButtons();
    tabButtons[index].classList.add("active");
    screens[index].classList.add("show");
  });
});

const hideAllScreens = () => {
  screens.forEach((screen) => screen.classList.remove("show"));
};

const hideAllButtons = () => {
  tabButtons.forEach((button) => button.classList.remove("active"));
};
