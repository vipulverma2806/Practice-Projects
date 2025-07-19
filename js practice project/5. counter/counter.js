const num = document.querySelector("#num");
const sub = document.querySelector("#sub");
const reset = document.querySelector("#set");
const add = document.querySelector("#add");

let count = 0;

sub.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = 0;
    num.innerText = count;
  } else {
    num.innerText = count;
  }
});

reset.addEventListener("click", () => {
  count = 0;
  num.innerText = count;
});

add.addEventListener("click", () => {
  count++;
  num.innerText = count;
});
