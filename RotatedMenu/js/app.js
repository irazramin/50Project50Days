const showBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const container = document.querySelector(".container");

showBtn.addEventListener("click", () => container.classList.add("show"));
closeBtn.addEventListener("click", () => container.classList.remove("show"));
