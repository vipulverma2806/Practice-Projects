const text = document.querySelector("#text");
let textd =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque";

let i = 0;

const intervalid = setInterval(() => {
  if (textd.length >= i) {
    text.innerText = textd.substring(0, i);
    i++;
  } else {
    clearInterval(intervalid);
  }
}, 50);
