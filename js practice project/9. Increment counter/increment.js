const count = document.querySelectorAll(".count");
console.log(count);

count.forEach((follow) => {
  const target = +follow.getAttribute("target");
  console.log(target);
  let num = 0;
  let inc = target / 95;
  setInterval(() => {
    if (num < target) {
      num += inc;
      num = Math.round(num);
      follow.innerHTML = num;
    } else {
      follow.innerHTML = target;
      clearInterval(this);
    }
  }, 10);
});
