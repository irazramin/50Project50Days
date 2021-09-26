const background = document.getElementById("background");
const password = document.getElementById("password");

password.addEventListener("input", (e) => {
  let pass = e.target.value;
  const length = pass.length;
  const calc = 20 - length * 2;
  background.style.filter = `blur(${calc}px)`;
});
