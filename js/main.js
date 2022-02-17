//toggle menu
const toglleBtn = document.querySelector("#toggle");
const menuBars = document.querySelectorAll(".menuBar");
const menueBackground = document.querySelector("#menuBackground");
const navigation = document.querySelector("#navigation");
const navList = document.querySelector("#navList");

toglleBtn.addEventListener("click", function() {
  menueBackground.classList.toggle("expand");
  navigation.classList.toggle("slide");
  for(let i = 0; i < menuBars.length; i++) {
    menuBars[i].classList.toggle("clickedSpan");
  }
});

//pop up
const popBtn = document.querySelectorAll(".pop");
const overlay = document.querySelector(".blur");
const popUp = document.querySelector(".popup");
const closeBtn = document.querySelector(".close");
console.log(popBtn, overlay, popUp);

for(let i = 0; i < popBtn.length; i++) {
  popBtn[i].addEventListener("click", function() {
    console.log("hello");
    overlay.classList.toggle("appear");
    popUp.classList.toggle("grow");
  });
}
closeBtn.addEventListener("click", function() {
  overlay.classList.toggle("appear");
  popUp.classList.toggle("grow");
})