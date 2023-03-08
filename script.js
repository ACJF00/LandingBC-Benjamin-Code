var menuButton = document.querySelector("#menu-button");
var menu = document.querySelector("#menu-mobile");

// show or hide
menuButton.addEventListener("click", function () {
  menu.classList.toggle("show-menu");
  menuButton.classList.toggle("close");
});

// hide when click outside the #menu-button and #menu-mobile
document.addEventListener("click", function (e) {
  if (window.innerWidth > 768) {
    return;
  } else if (e.target == menuButton) {
    return;
  } else {
    if (menu.classList.contains("show-menu")) {
      menu.classList.remove("show-menu");
      menuButton.classList.toggle("close");
    }
  }
});
