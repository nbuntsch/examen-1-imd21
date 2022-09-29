var button = document.querySelector(".button");
var on = function () {
  button.classList.toggle("on");
};

button.addEventListener("click", on);

var black = document.querySelector(".black");
var invisible1 = document.querySelector(".invisible-1");
var invisible2 = document.querySelector(".invisible-2");
var show = function () {
  invisible1.classList.add("show");
  invisible2.classList.add("show");
  black.classList.add("invisible-1");
};

black.addEventListener("click", show);
