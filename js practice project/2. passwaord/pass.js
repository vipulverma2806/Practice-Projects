const inputf = document.querySelector("input");
const msg = document.querySelector("p");

inputf.addEventListener("input", function () {
  msg.style.color = "red";

  const pass = inputf.value;

  if (pass.length < 8) {
    msg.innerText = "password should be 8 or more character long";
  } else if (pass.search(/[a-z]/) == -1) {
    msg.innerText = "Lowercase missing";
  } else if (pass.search(/[A-Z]/) == -1) {
    msg.innerText = "Uppercase missing";
  } else if (pass.search(/[0-9]/) == -1) {
    msg.innerText = "Number missing";
  } else if (pass.search(/[^a-z A-Z 0-9]/) == -1) {
    msg.innerText = "Special character missing";
  } else {
    msg.innerText = "password is strong";
    msg.style.color = "green";
  }
});
