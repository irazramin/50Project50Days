const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);

// checkBoxes();
function checkBoxes() {
  const targetBottom = (window.innerHeight / 5) * 4;

//   console.log(targetBottom);

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    // console.log(boxTop);
    if (boxTop < targetBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
