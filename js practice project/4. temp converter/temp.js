const input = document.querySelector("input");
const output = document.querySelector("#output");
input.addEventListener("input", () => {
  let kelvin = Number(input.value) + 273.15;
  output.innerText = kelvin.toFixed(2);
});
