const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider__items = document.querySelector(".slider__items");
const sliderStyles = getComputedStyle(slider__items);
const items = document.querySelectorAll(".slider__item");

console.log(items);

let minRight = 0;
let widthItem = getComputedStyle(slider__item[0].width);
let step = parseInt(widthItem);
let visibleItems = 300 / step;
let maxRight = (items.length - visibleItems) * step;
let currentRight = 0;

slider__items.style.right = currentRight;

right.addEventListener("click", e => {
    e.preventDefault();

    if(currentRight < maxRight) {
        currentRight += step;
        slider__items.style.right = `${currentRight}px`;
    }
})

left.addEventListener("click", e => {
    e.preventDefault();

    if(currentRight > minRight) {
        currentRight -= step;
        slider__items.style.right = `${currentRight}px`;
    }
})