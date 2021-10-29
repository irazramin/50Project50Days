const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = breathTime / 2;

breathAnimation();

function breathAnimation() {
  console.log(123);
  text.innerText = 'Breathe In';
  container.className = 'container grow';
  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      container.className = 'container shrink';
      text.innerText = 'Breathe Out';
    }, holdTime);
  }, breathTime);
}

setInterval(breathAnimation, totalTime);
