const container = document.querySelectorAll("span");
container.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.toggle("hover");
    console.log("okk");
  });
});
