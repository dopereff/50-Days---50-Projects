// PANELS

const panels = document.querySelectorAll(".panel");

// SKILLS HERO 1

const skill1 = document.getElementById("skillButton1");
const skill2 = document.getElementById("skillButton2");
const skill3 = document.getElementById("skillButton3");
const skill4 = document.getElementById("skillButton4");
const skillContent1 = document.getElementById("skillContent1");
const skillContent2 = document.getElementById("skillContent2");
const skillContent3 = document.getElementById("skillContent3");
const skillContent4 = document.getElementById("skillContent4");

// SKILLS HERO 2

const skill21 = document.getElementById("skillButton21");
const skill22 = document.getElementById("skillButton22");
const skill23 = document.getElementById("skillButton23");
const skill24 = document.getElementById("skillButton24");
const skillContent21 = document.getElementById("skillContent21");
const skillContent22 = document.getElementById("skillContent22");
const skillContent23 = document.getElementById("skillContent23");
const skillContent24 = document.getElementById("skillContent24");

// SKILLS HERO 3

const skill31 = document.getElementById("skillButton31");
const skill32 = document.getElementById("skillButton32");
const skill33 = document.getElementById("skillButton33");
const skill34 = document.getElementById("skillButton34");
const skillContent31 = document.getElementById("skillContent31");
const skillContent32 = document.getElementById("skillContent32");
const skillContent33 = document.getElementById("skillContent33");
const skillContent34 = document.getElementById("skillContent34");

// SKILLS HERO 4

const skill41 = document.getElementById("skillButton41");
const skill42 = document.getElementById("skillButton42");
const skill43 = document.getElementById("skillButton43");
const skill44 = document.getElementById("skillButton44");
const skillContent41 = document.getElementById("skillContent41");
const skillContent42 = document.getElementById("skillContent42");
const skillContent43 = document.getElementById("skillContent43");
const skillContent44 = document.getElementById("skillContent44");

// PANELS

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

// SKILLS HERO 1

skill1.addEventListener("click", () => {
  skillContent2.classList.remove("active");
  skillContent3.classList.remove("active");
  skillContent4.classList.remove("active");
  skillContent1.classList.add("active");
});
skill2.addEventListener("click", () => {
  skillContent1.classList.remove("active");
  skillContent3.classList.remove("active");
  skillContent4.classList.remove("active");
  skillContent2.classList.add("active");
});
skill3.addEventListener("click", () => {
  skillContent1.classList.remove("active");
  skillContent2.classList.remove("active");
  skillContent4.classList.remove("active");
  skillContent3.classList.add("active");
});
skill4.addEventListener("click", () => {
  skillContent1.classList.remove("active");
  skillContent2.classList.remove("active");
  skillContent3.classList.remove("active");
  skillContent4.classList.add("active");
});
skill1.addEventListener("click", () => {
  skill2.classList.remove("active");
  skill3.classList.remove("active");
  skill4.classList.remove("active");
  skill1.classList.add("active");
});
skill2.addEventListener("click", () => {
  skill1.classList.remove("active");
  skill3.classList.remove("active");
  skill4.classList.remove("active");
  skill2.classList.add("active");
});
skill3.addEventListener("click", () => {
  skill1.classList.remove("active");
  skill2.classList.remove("active");
  skill4.classList.remove("active");
  skill3.classList.add("active");
});
skill4.addEventListener("click", () => {
  skill1.classList.remove("active");
  skill2.classList.remove("active");
  skill3.classList.remove("active");
  skill4.classList.add("active");
});

// SKILLS HERO 2

skill21.addEventListener("click", () => {
  skillContent22.classList.remove("active");
  skillContent23.classList.remove("active");
  skillContent24.classList.remove("active");
  skillContent21.classList.add("active");
});
skill22.addEventListener("click", () => {
  skillContent21.classList.remove("active");
  skillContent23.classList.remove("active");
  skillContent24.classList.remove("active");
  skillContent22.classList.add("active");
});
skill23.addEventListener("click", () => {
  skillContent21.classList.remove("active");
  skillContent22.classList.remove("active");
  skillContent24.classList.remove("active");
  skillContent23.classList.add("active");
});
skill24.addEventListener("click", () => {
  skillContent21.classList.remove("active");
  skillContent22.classList.remove("active");
  skillContent23.classList.remove("active");
  skillContent24.classList.add("active");
});
skill21.addEventListener("click", () => {
  skill22.classList.remove("active");
  skill23.classList.remove("active");
  skill24.classList.remove("active");
  skill21.classList.add("active");
});
skill22.addEventListener("click", () => {
  skill21.classList.remove("active");
  skill23.classList.remove("active");
  skill24.classList.remove("active");
  skill22.classList.add("active");
});
skill23.addEventListener("click", () => {
  skill21.classList.remove("active");
  skill22.classList.remove("active");
  skill24.classList.remove("active");
  skill23.classList.add("active");
});
skill24.addEventListener("click", () => {
  skill21.classList.remove("active");
  skill22.classList.remove("active");
  skill23.classList.remove("active");
  skill24.classList.add("active");
});

// SKILLS HERO 3

skill31.addEventListener("click", () => {
  skillContent32.classList.remove("active");
  skillContent33.classList.remove("active");
  skillContent34.classList.remove("active");
  skillContent31.classList.add("active");
});
skill32.addEventListener("click", () => {
  skillContent31.classList.remove("active");
  skillContent33.classList.remove("active");
  skillContent34.classList.remove("active");
  skillContent32.classList.add("active");
});
3;
skill33.addEventListener("click", () => {
  skillContent31.classList.remove("active");
  skillContent32.classList.remove("active");
  skillContent34.classList.remove("active");
  skillContent33.classList.add("active");
});
skill34.addEventListener("click", () => {
  skillContent31.classList.remove("active");
  skillContent32.classList.remove("active");
  skillContent33.classList.remove("active");
  skillContent34.classList.add("active");
});
skill31.addEventListener("click", () => {
  skill32.classList.remove("active");
  skill33.classList.remove("active");
  skill34.classList.remove("active");
  skill31.classList.add("active");
});
skill32.addEventListener("click", () => {
  skill31.classList.remove("active");
  skill33.classList.remove("active");
  skill34.classList.remove("active");
  skill32.classList.add("active");
});
3;
skill33.addEventListener("click", () => {
  skill31.classList.remove("active");
  skill32.classList.remove("active");
  skill34.classList.remove("active");
  skill33.classList.add("active");
});
skill34.addEventListener("click", () => {
  skill31.classList.remove("active");
  skill32.classList.remove("active");
  skill33.classList.remove("active");
  skill34.classList.add("active");
});

// SKILLS HERO 4

skill41.addEventListener("click", () => {
  skillContent42.classList.remove("active");
  skillContent43.classList.remove("active");
  skillContent44.classList.remove("active");
  skillContent41.classList.add("active");
});
skill42.addEventListener("click", () => {
  skillContent41.classList.remove("active");
  skillContent43.classList.remove("active");
  skillContent44.classList.remove("active");
  skillContent42.classList.add("active");
});
skill43.addEventListener("click", () => {
  skillContent41.classList.remove("active");
  skillContent42.classList.remove("active");
  skillContent44.classList.remove("active");
  skillContent43.classList.add("active");
});
skill44.addEventListener("click", () => {
  skillContent41.classList.remove("active");
  skillContent42.classList.remove("active");
  skillContent43.classList.remove("active");
  skillContent44.classList.add("active");
});
skill41.addEventListener("click", () => {
  skill42.classList.remove("active");
  skill43.classList.remove("active");
  skill44.classList.remove("active");
  skill41.classList.add("active");
});
skill42.addEventListener("click", () => {
  skill41.classList.remove("active");
  skill43.classList.remove("active");
  skill44.classList.remove("active");
  skill42.classList.add("active");
});
skill43.addEventListener("click", () => {
  skill41.classList.remove("active");
  skill42.classList.remove("active");
  skill44.classList.remove("active");
  skill43.classList.add("active");
});
skill44.addEventListener("click", () => {
  skill41.classList.remove("active");
  skill42.classList.remove("active");
  skill43.classList.remove("active");
  skill44.classList.add("active");
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
