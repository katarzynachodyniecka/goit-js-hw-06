const takeOnefromButtonEl = document.querySelector('[data-action="decrement');
const value = document.querySelector("#value");
const addOneToButtonEl = document.querySelector('[data-action="increment');

let counterValue = 0;

takeOnefromButtonEl.addEventListener("click", () => {
  counterValue--;
  value.textContent = counterValue;
});
addOneToButtonEl.addEventListener("click", () => {
  counterValue++;
  value.textContent = counterValue;
});
