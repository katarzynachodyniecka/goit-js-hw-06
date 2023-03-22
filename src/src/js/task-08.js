const form = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in both fields!");
  } else {
    const contact = {
      email: email.value,
      password: password.value,
    };
    console.log(contact);
    event.currentTarget.reset();
  }
}

form.addEventListener("submit", handleSubmit);
