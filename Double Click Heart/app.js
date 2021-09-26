const loveMe = document.querySelector(".loveMe");
const times = document.querySelector(".count");

let clickTime = 0;
let clickCount = 0;


loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
      console.log(new Date().getTime() - clickTime);
    } else {
      clickTime = new Date().getTime();
    }
  }
});



function createHeart(event) {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  let x = event.clientX;
  let y = event.clientY;

  let leftOffset = event.target.offsetLeft;
  let rightOffset = event.target.offsetTop;

  let insideX = x - leftOffset;
  let insideY = y - rightOffset;

  heart.style.top = `${insideY}px`;
  heart.style.left = `${insideX}px`;
  console.log(x, y);
  console.log(leftOffset, rightOffset);

  loveMe.appendChild(heart);
  times.innerHTML = ++clickCount;
}
