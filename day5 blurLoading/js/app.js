const loadingText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
let load = 0;

let incr = setInterval(loading, 30);

console.log(incr);
function loading() {
  load++;

  if (load > 99) {
    clearInterval(incr);
  }

  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load,0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`

}
const scale = (num, in_min, in_max, out_in, out_max) => {
  return   ((num - in_min) * (out_max - out_in) / (in_max - in_min)) + out_in
};
