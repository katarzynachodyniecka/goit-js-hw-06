const takeFromInput = document.querySelector("#controls input");
const boxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");

    box.style.width = 30 + i * 10 + "px";
    box.style.height = 30 + i * 10 + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }
  return boxes;
}

function destroyBoxes() {
  while (boxes.firstChild) {
    boxes.firstChild.remove();
  }
  size = 30;
}

takeFromInput.addEventListener("change", () => (amount = takeFromInput.value));

btnCreate.addEventListener("click", () => {
  createBoxes(amount);
});

btnDestroy.addEventListener("click", destroyBoxes);
