const modalBtn = document.getElementById("modal-ac");
const modal = document.querySelector(".modal");
const modalKapat= document.getElementById("modal-kapat");

modalBtn.addEventListener("click",() => {
    modal.style.display="flex";

})
modalKapat.addEventListener("click",() =>{
    modal.style.display="none";
}
)


const slides = document.querySelectorAll(".carousel-item");
const btnPrev = document.querySelector("#prex");
const btnNext = document.querySelector("#next");

let autoSlider = true;
let sliderInterval;
let timerInterval;
let counter;
let intervalTime = 3000;

btnPrev.addEventListener("click", function () {
    prevSlide();//Bu bir önceki slidea geçişi sağlayan func
    againInterval();
});

btnNext.addEventListener("click", function () {
    nextSlide();//Bu bir sonraki slidea geçişi sağlayan func
    againInterval();
});

function prevSlide() {
    let activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");
    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add("active");
    } else {
        slides[slides.length - 1].classList.add("active");
    }
}

function nextSlide() {
    let activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");
    if (activeSlide.nextElementSibling && activeSlide.nextElementSibling.classList.contains("carousel-item")) {
        activeSlide.nextElementSibling.classList.add("active");
    } else {
        slides[0].classList.add("active");
    }
}

function againInterval() {
    clearInterval(sliderInterval);
    clearInterval(timerInterval);
    sliderInterval = setInterval(nextSlide, intervalTime);
    counter = 0;
    timerInterval = setInterval(timerDisplay, 1000);
}
if (autoSlider) {
    againInterval();
}
