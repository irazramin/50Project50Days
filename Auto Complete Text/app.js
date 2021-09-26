const speedInput = document.getElementById("speed");
const text = "we are programmers";
const autoText = document.getElementById("text");
let idx = 1;
let speed = 300 / speedInput.value;

autoCompleteText();

function autoCompleteText() {
  autoText.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(autoCompleteText, speed);
}

speedInput.addEventListener("input", (e) => (speed = 300 / e.target.value));
