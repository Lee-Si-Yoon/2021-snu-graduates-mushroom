const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slider__item:first-child");
const btnContainer = document.querySelector(".button__container");
const btn = btnContainer.querySelector("img");
const wordContainer = document.querySelector(".word__container");
const word = wordContainer.querySelector("p");

firstSlide.classList.add(SHOWING_CLASS);

function slide() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
}

btn.addEventListener("click", () => {
  slide();
});

function words() {
  const wordList = [
    "나를 눌러라!",
    "버섯의 소리가 들리는가!",
    "버섯 자라는 중",
    "여기를 눌러!",
  ];
  const randomNumber = Math.floor(Math.random() * wordList.length);
  word.innerHTML = wordList[randomNumber];
}

setInterval(words, 1000);
