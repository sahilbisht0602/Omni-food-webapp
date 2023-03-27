let element = document.getElementsByClassName("header");
// console.log(element[0]);
// element[0].addEventListener(onclick, showNavBar);

const openBtn = document.getElementsByClassName("mobile-nav-icon");
openBtn[0].addEventListener(onclick, () => {
  console.log("clicked");
});

function showNavBar() {
  element[0].classList.add("nav-open");
  console.log(element[0]);
}
