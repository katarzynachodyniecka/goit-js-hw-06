const input = document.querySelector("#validation-input");
const validLength = Number(input.dataset.length);

function validation() {
  1234567;
  if (input.value.length === validLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

input.addEventListener("blur", validation);
