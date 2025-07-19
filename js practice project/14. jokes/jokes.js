const joke = document.querySelector("#joke");
const button = document.querySelector("button");

async function generatejokes() {
  const content = {
    headers: { "X-Api-Key": "ae8KJSixKe1Xx6oR8I/VUA==YpJFRMEdOq2KLmZ9" },
  };
  let url = `https://api.api-ninjas.com/v1/dadjokes`;
  let dadjoke = await fetch(url, content);
  dadjoke = await dadjoke.json();
  joke.innerHTML = dadjoke[0].joke;
}
button.addEventListener("click", generatejokes);
