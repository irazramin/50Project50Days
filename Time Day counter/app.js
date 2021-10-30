const counter = document.getElementById('counter');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const second = document.getElementById('second');

const currentYear = new Date().getFullYear();

const newYear = new Date(` January 01 ${currentYear + 1} 00:00:00`);

function updateCountdown() {
  const currentTime = new Date();

  const diff = newYear - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  second.innerHTML = s < 10 ? '0' + s : s;

  console.log(d)
}
setTimeout(() => {
  loading.remove();
  counter.style.display = 'flex';
}, 1000);

setInterval(updateCountdown, 1000);