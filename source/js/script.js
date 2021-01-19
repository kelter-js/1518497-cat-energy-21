let mainMenu = document.querySelector(".main-nav--withoutjs");
let mainMenuButton = document.querySelector(".main-nav__toggle");
if(mainMenu.classList.contains("main-nav--withoutjs")) {
  mainMenu.classList.remove("main-nav--withoutjs")
}
mainMenuButton.addEventListener("click", function() {
  mainMenu.classList.toggle('main-nav--closed');
  mainMenu.classList.toggle('main-nav--opened');
});
