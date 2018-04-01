var link = document.querySelector(".footer-contacts-button");

var popup = document.querySelector(".popup");
var close = popup.querySelector(".close-button");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
