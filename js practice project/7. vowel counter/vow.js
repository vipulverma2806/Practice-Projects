const text = document.querySelector("#text");
const button = document.querySelector("button");
const output = document.querySelector("#output");

button.addEventListener("click", () => {
  count = 0;
  const val = text.value;
  if (text.value === "") {
    output.innerHTML = "Write Something";
  } else if (text.value !== "") {
    for (i = 0; i < val.length; i++) {
      if (
        val[i] == "a" ||
        val[i] == "e" ||
        val[i] == "i" ||
        val[i] == "o" ||
        val[i] == "u"
      ) {
        count++;
        output.innerHTML = `vowel count is ${count}`;
      } else if (count == 0) {
        output.innerHTML = "There are only consonant";
      }
    }
  }
});
