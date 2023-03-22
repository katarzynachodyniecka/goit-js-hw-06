const takeName = document.querySelector("#name-input");
const giveName = document.querySelector("#name-output");

takeName.addEventListener("input", () => {
  giveName.textContent = takeName.value !== "" ? takeName.value : "annonymous";
});
