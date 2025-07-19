const contain = document.querySelector(".contain");
const hexcode = "0123456789ABCDEF";

for (i = 0; i < 30; i++) {
  const newdiv = document.createElement("div");

  newdiv.classList.add("color-card");
  contain.appendChild(newdiv);

  let hex = "#";
  let num = "";
  for (j = 0; j < 6; j++) {
    num += hexcode[getRandom()];
  }
  hex += num;
  newdiv.style.backgroundColor = `${hex}`;
  console.log(hex);

  newdiv.innerHTML = `${hex}`;

  function getRandom() {
    return Math.floor(Math.random() * 16);
  }
}
