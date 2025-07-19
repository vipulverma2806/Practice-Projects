const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const input = document.querySelector("input");
const score = document.querySelector("#score");
const submit = document.querySelector("button");
let count = 0;
submit.addEventListener("click", () => {
  let inputv = input.value.trim();
  inputv = Number(inputv);
  let mult = Number(num1.innerText) * Number(num2.innerText);
  if (mult == inputv) {
    count++;
    score.innerText = count;
    num1.innerText = Math.floor(Math.random() * 20);
    num2.innerText = Math.floor(Math.random() * 20);
    input.value = "";
  } else if (input.value == "") {
    input.placeholder = "Put Ans here";
  } else {
    count--;
    num1.innerText = Math.floor(Math.random() * 20);
    num2.innerText = Math.floor(Math.random() * 20);
    input.value = "";
    score.innerText = count;
  }
});
