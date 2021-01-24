let mainMenu = document.querySelector(".main-nav");
let mainMenuButton = document.querySelector(".main-nav__toggle");
let interactiveMap = document.querySelector(".dealers__map-container");
let staticMap = document.querySelector(".dealers__map-wrapper");
let sliderImageBefore = document.querySelector(".example__image-before");
let sliderImageAfter = document.querySelector(".example__image-after");
let sliderButtonsContainer = document.querySelector(".example__slider-controls-wrapper");
let sliderIndicator = document.querySelector(".example__slider-toggle");

if(sliderButtonsContainer) {
  sliderButtonsContainer.addEventListener("click", function(evt) {
    let target = evt.target;
    if(target.classList.contains("example__slider-text--before")) {
      if(sliderImageBefore.classList.contains("example__image-hidden")) {
        sliderImageAfter.classList.toggle("example__image-hidden");
        sliderImageBefore.classList.toggle("example__image-hidden");
        sliderIndicator.classList.toggle("example__slider-toggle--after");
        sliderIndicator.classList.toggle("example__slider-toggle--before");
      }
    }
    if(target.classList.contains("example__slider-text--after")) {
      if(sliderImageAfter.classList.contains("example__image-hidden")) {
        sliderImageBefore.classList.toggle("example__image-hidden");
        sliderImageAfter.classList.toggle("example__image-hidden");
        sliderIndicator.classList.toggle("example__slider-toggle--after");
        sliderIndicator.classList.toggle("example__slider-toggle--before");
      }
    }
  })
}

if(mainMenu.classList.contains("main-nav--withoutjs")) {
  mainMenu.classList.remove("main-nav--withoutjs")
}

mainMenuButton.addEventListener("click", function() {
  mainMenu.classList.toggle('main-nav--closed');
  mainMenu.classList.toggle('main-nav--opened');
});

if(interactiveMap.classList.contains("invisible")) {
  interactiveMap.classList.toggle("invisible");
  staticMap.classList.toggle("invisible");
}
