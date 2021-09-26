const liters = document.getElementById("liters");
const smallCups = document.querySelectorAll(".cup-small");
const remained = document.getElementById("remained");
const percentage = document.getElementById("percentage");

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

let highlightCups = (idx) => {
  if (
    smallCups[idx].classList.contains("fill") &&
    !smallCups[idx].nextElementSibling.classList.contains("fill")
  ) {
    idx--;
  }
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("fill");
    } else {
      cup.classList.remove("fill");
    }
  });
  updateBigCup();
};

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.fill").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L `;
  }
}
