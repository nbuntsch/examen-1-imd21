var button = document.querySelector(".button");
var activate = function () {
  button.classList.toggle("is-active");
};
button.addEventListener("click", activate);
