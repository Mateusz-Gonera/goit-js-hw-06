function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("input");
const boxes = document.querySelector("div#boxes");
const createBoxes = (amount) => {
  const box = document.createElement("div");
  box.style.backgroundColor = `${getRandomHexColor()}`;
  box.style.height = "30px";
  box.style.width = "30px";
  boxes.append(box);
  console.log(box);

};

createBoxes(input.value);