const conatiner = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const sqaure = document.createElement("div");
  sqaure.classList.add("square");

  sqaure.addEventListener("mouseover",() => setColor(sqaure));
  sqaure.addEventListener("mouseout",() => removeColor(sqaure));

  conatiner.appendChild(sqaure);
}

function setColor(elements) {
  let color = getRandomColor();
  elements.style.background = color;
  elements.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(elements){
    elements.style.background = '#111';
    elements.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
