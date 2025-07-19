const button = document.querySelector("button");
const qrimg = document.querySelector("img");
const input = document.querySelector("input");
button.addEventListener("click", () => {
  if (input.value) {
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
  }else{
    alert('Provid valid URL')
  }
});
