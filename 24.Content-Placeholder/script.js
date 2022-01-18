const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const authourName = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = '<img src="https://source.unsplash.com/random/250×250" alt="">';
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  excerpt.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, assumenda.";
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/43.jpg" alt="author">';
  authourName.innerHTML = "John Doe";
  date.innerHTML = `08 March 2021`;

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
