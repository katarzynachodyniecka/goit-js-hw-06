const body = document.querySelector("body");
const colorNumber = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

colorNumber.textContent = "#ffffff";
let newColor;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const giveNewColor = () => {
  newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorNumber.textContent = newColor;
};

btnChangeColor.addEventListener("click", giveNewColor);
