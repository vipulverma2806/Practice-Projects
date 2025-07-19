const month = document.querySelector("#month");
const weekday = document.querySelector("#weekday");
const day = document.querySelector("#day");
const year = document.querySelector("#year");

let date = new Date();
month.innerText = date.toLocaleDateString("hi-in", { month: "long" });
weekday.innerText = date.toLocaleDateString("hi-in", { weekday: "long" });
day.innerText = date.getDay();
year.innerText = date.getFullYear();
