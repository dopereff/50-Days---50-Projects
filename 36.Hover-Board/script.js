const container = document.getElementById("container");
const colors = ["green", "blue", "red", "yellow", "pink", "orange", "red", "purple"];
const circles = 420;

for (let i = 0; i < circles; i++) {
  const circle = document.createElement("div");
  circle.innerText = "*";
  circle.classList.add("circle");
  circle.addEventListener("mouseover", () => setColor(circle));
  circle.addEventListener("mouseout", () => removeColor(circle));
  container.appendChild(circle);
}

const setColor = (element) => {
  const color = getRandomColor();
  element.style.background = color;
  element.style.color = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (element) => {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "none";
};

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length - 1)];
