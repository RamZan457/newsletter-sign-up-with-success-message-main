const modal = document.querySelector("#modal");
const main = document.querySelector("main");
const container = document.querySelector("#container");
const inputholder = document.querySelector("#input-holder");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#sub");

emailInput.addEventListener("input", () => {
  const email = emailInput.value;
  if (!isValidEmail(email)) {
    inputholder.classList.add("invalid");
    submitButton.disabled = true;
  } else {
    inputholder.classList.remove("invalid");
    submitButton.disabled = false;
  }
});

submitButton.addEventListener("click", () => {
  const email = emailInput.value;
  if (!isValidEmail(email)) {
    inputholder.classList.add("invalid");
    return;
  }

  inputholder.classList.remove("invalid");
  modal.style.display = "flex";
  container.style.display = "none";
  document.querySelector("#subscribed-mail").innerHTML = email;
});

document.querySelector("#dismiss").addEventListener("click", () => {
  modal.style.display = "none";
  container.style.display = "block";
});

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}
