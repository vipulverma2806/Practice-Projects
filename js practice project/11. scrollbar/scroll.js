const scroll = document.querySelector("#scroll");
window.addEventListener("scroll", () => {
  let perc =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  scroll.style.width = perc + "%";
});
