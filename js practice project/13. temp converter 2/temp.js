const cel = document.querySelector("#cel");
const fare = document.querySelector("#fare");
const kel = document.querySelector("#kel");

let c;
let f;
let k;

cel.addEventListener("input", () => {
  c = parseFloat(cel.value);
  f = (c * 9) / 5 + 32;
  k = c + 273.15;
  fare.value = f.toFixed(2);
  kel.value = k.toFixed(2);
});
fare.addEventListener("input", () => {
  f = parseFloat(fare.value);
  c = ((f - 32) * 5) / 9;
  k = c + 273.15;
  cel.value = c.toFixed(2);
  kel.value = k.toFixed(2);
});
kel.addEventListener("input", () => {
  k = parseFloat(kel.value);
  c = k - 273.15;
  f = (c * 9) / 5 + 32;

  fare.value = f.toFixed(2);
  cel.value = c.toFixed(2);
});
