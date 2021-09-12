const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const btn = document.querySelector(".toggle");

const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

const days = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

btn.addEventListener("click", (e) => {
  const htmlEl = document.querySelector("html");

  if (htmlEl.classList.contains("dark")) {
    htmlEl.classList.remove("dark");

    e.target.innerHtml = "Dark Mode";
  } else {
    htmlEl.classList.add("dark");
    e.target.innerHtml = "Light Mode";
  }
});

function setTime() {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDay();
  const hour = date.getHours();
  const hourFormat = hour % 12;
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const dat = date.getDate();
  const timeFormat = hourFormat >= 12 ? "PM" : "AM";

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hourFormat,
    0,
    11,
    0,
    360
  )}deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minute,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    second,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hour}:${
    minute < 10 ? `0${minute}` : minute
  } ${timeFormat}`;

  dateEl.innerHTML = `${days[day]}, ${months[month]} ${dat}`
}

const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

setTime();

setInterval(setTime, 1000);
