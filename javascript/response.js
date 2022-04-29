// make the navigation bar responsive
const list = document.querySelector(".nav-list");
const responseEl = document.querySelector(".nav-outside");
const body = document.querySelector("body");

function navOpen() {
  list.classList.add("show");
  responseEl.classList.add("active");
  body.style.width = "100%";
  body.style.overflow = "hidden";
  body.style.visibility = "visible";
  // body.style =
  //   "visibility: visible; height: 100vh; width:100vw; overflow:hidden;";
}

document.querySelector(".nav-icon").onclick = function () {
  navOpen();
};

function navClose() {
  list.classList.remove("show");
  responseEl.classList.remove("active");
  body.style.width = "100%";
  body.style.overflow = "hidden";
  body.style.visibility = "visible";
  // document.body.style =
  //   "visibility: visible; height: initial; width: 100%; overflow-x: hidden;";
}

document.querySelector(".nav-close").onclick = function () {
  navClose();
};

document.querySelector(".nav-outside").onclick = function () {
  navClose();
};
