const ratingContainer = document.querySelector(".ratings-container");
const ratings = document.querySelectorAll(".rating");
const sendBtn = document.getElementById("send");
const panel = document.getElementById("panel");
let selectedItem = "satisfied";

ratingContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActiveClass();
    e.target.parentNode.classList.add("active");
    selectedItem = e.target.nextElementSibling.innerHTML;
    console.log(selectedItem)
  }
});

function removeActiveClass() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}

sendBtn.addEventListener('click', (e) =>{
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedItem}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `
});