let mainMenu = document.querySelector(".main-nav");
let mainMenuButton = document.querySelector(".main-nav__toggle");
if(mainMenu.classList.contains("main-nav--withoutjs")) {
  mainMenu.classList.remove("main-nav--withoutjs")
}
mainMenuButton.addEventListener("click", function() {
  mainMenu.classList.toggle('main-nav--closed');
  mainMenu.classList.toggle('main-nav--opened');
});

let interactiveMap = document.querySelector(".dealers__map-container");
let staticMap = document.querySelector(".dealers__map-wrapper");

if(interactiveMap.classList.contains("invisible")) {
  interactiveMap.classList.toggle("invisible");
  staticMap.classList.toggle("invisible");
}
