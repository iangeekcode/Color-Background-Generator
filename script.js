var inputOne = document.querySelector(".color1");
var inputTwo = document.querySelector(".color2");
var body = document.querySelector("body");
var h3 =  document.querySelector("h3");

inputOne.addEventListener("input", function() {
  body.style.background = "linear-gradient(to right, " + inputOne.value + ", " + inputTwo.value + ")";

  h3.textContent = body.style.background;
})

inputTwo.addEventListener("input", function() {
  body.style.background = "linear-gradient(to right, " + inputOne.value + ", " + inputTwo.value + ")";

  h3.textContent = body.style.background;
})