const atif = document.querySelector("#atif");
const jobs = document.querySelector("#jobs");
const srk = document.querySelector("#srk");
const lambo = document.querySelector("#lambo");

const aslam = document.querySelector("#aslam");
const steve = document.querySelector("#steve");
const gauri = document.querySelector("#gauri");
const rgini = document.querySelector("#rgini");

aslam.addEventListener("click", () => {
  stops();
  atif.play();
});
steve.addEventListener("click", () => {
  stops();
  jobs.play();
});
gauri.addEventListener("click", () => {
  stops();
  srk.play();
});
rgini.addEventListener("click", () => {
  stops();
  lambo.play();
});

function stops() {
  atif.pause();
  atif.currentTime = 0;
  srk.pause();
  srk.currentTime = 0;
  jobs.pause();
  jobs.currentTime = 0;
  lambo.pause();
  lambo.currentTime = 0;
}
