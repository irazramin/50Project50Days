const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((items, idx) => {
  items.addEventListener("click", () => {
    hideAllContent();
    hideAllList();
    contents[idx].classList.add("show");
    items.classList.add("active");
  });
});

function hideAllContent() {
  contents.forEach((content) => content.classList.remove("show"));
}

function hideAllList() {
  listItems.forEach((item) => item.classList.remove("active"));
}
