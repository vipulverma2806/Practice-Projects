const d = document.querySelector("#d");
const h = document.querySelector("#h");
const m = document.querySelector("#m");
const s = document.querySelector("#s");
const neww = document.querySelector("#newy");
const newy = new Date().getFullYear() + 1;
neww.textContent = newy;

setInterval(() => {
  let currentd = new Date();
  let newd = new Date(`${newy}-01-01 00:00:00`);
  let totalSec = (newd - currentd) / 1000;
  let days = totalSec / 60 / 60 / 24;
  let hours = (totalSec / 60 / 60) % 24;
  let minutes = (totalSec / 60) % 60;
  totalSec = totalSec % 60;
  days = Math.floor(days);
  hours = Math.floor(hours);
  minutes = Math.floor(minutes);
  totalSec = Math.floor(totalSec);

  d.innerHTML = days;
  m.innerHTML = minutes;
  h.innerHTML = hours;
  s.innerHTML = totalSec;
}, 1000);
