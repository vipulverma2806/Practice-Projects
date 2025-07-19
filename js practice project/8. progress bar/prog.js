const load = document.querySelector("#loading");
const per = document.querySelector("#percent");

window.addEventListener("DOMContentLoaded", () => {
  let progress = 0;

  setInterval(() => {
    if (progress < 100) progress++;
    load.style.width = `${progress}%`;
    per.innerHTML = `${progress}%`;
  },30);
});
