function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const btn = document.querySelector("button.change-color");
const text = document.querySelector("span.color");
text.textContent = "#ffffff";
body.style.backgroundColor = "#ffffff";
btn.addEventListener("click", (event) => {
  text.textContent = `${getRandomHexColor()}`;
  body.style.backgroundColor = `${getRandomHexColor()}`;
})

