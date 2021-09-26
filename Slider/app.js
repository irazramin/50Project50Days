const slider = document.querySelector(".slider-container");
const leftSlider = document.querySelector(".left-slider");
const rightSlider = document.querySelector(".right-slider");
const upBtn = document.querySelector(".up-btn");
const downBtn = document.querySelector(".down-btn");
const sliderLenght = rightSlider.querySelectorAll("div").length;

let activesSlideIndex = 0;

leftSlider.style.top = `-${(sliderLenght - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

let changeSlide = (direction) => {
    const sliderHeight = slider.clientHeight;

    if (direction === "up") {
        activesSlideIndex++;
        if (activesSlideIndex > sliderLenght - 1) {
            activesSlideIndex = 0;
        }
    } else if (direction === "down") {
        activesSlideIndex--;
        if (activesSlideIndex < 0) {
            activesSlideIndex = sliderLenght - 1;
        }
    }

    rightSlider.style.transform = `translateY(-${
    activesSlideIndex * sliderHeight
  }px)`;
    leftSlider.style.transform = `translateY(${
    activesSlideIndex * sliderHeight
  }px)`;
};