const filled = document.querySelector(".filled");
const emties = document.querySelectorAll(".empty");

filled.addEventListener("dragstart", dragStart);
filled.addEventListener("dragend", dragEnd);


for (const empty of emties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}
function dragEnd() {
  this.className += " filled";
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
  this.className += " hovered";
}
function dragLeave() {
  this.className = 'empty'
}
function dragDrop() {
  this.className = "empty";
  this.append(filled);
}
