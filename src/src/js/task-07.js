const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const changeFontSize = () => {
  text.style.fontSize = `${slider.value}px`;
};

slider.addEventListener("input", changeFontSize);
