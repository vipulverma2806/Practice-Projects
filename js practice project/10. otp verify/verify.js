const code = document.querySelectorAll(".code");
code[0].focus();
code.forEach((otp, idx) => {
  otp.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      code[idx].value = "";
      setTimeout(() => code[idx + 1].focus(), 10);
    } else if (e.key == "Backspace") {
      setTimeout(() => code[idx - 1].focus(), 10);
    }
  });
});
