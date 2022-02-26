

// const mobileUl = document.querySelector('.mobileUl ul')

// const burgerHandlerOpen = () => {
//     mobileUl.classList.add('active')
// }

// const burgerHandlerClose = () => {
//     mobileUl.classList.remove('active')
// }

// window.onscroll = function() {
//     scrollFunction()
// };

// function scrollFunction() {
//   if (document.body.scrollTop < document.documentElement.scrollTop ) {
//       document.querySelector('.Navbar').classList.add('actived')
//   } else {
//     document.querySelector('.Navbar').classList.remove('actived')
//   }
// }

const spiner = document.querySelector(".spiner");

document.addEventListener("load", () => {
  spiner.style.display = "none ";
});

function navbar() {
  const nav = document.querySelector(".navBar");
  let scrolling = window.pageYOffset > 200;

  nav.classList.toggle("active", scrolling);
}

window.addEventListener("scroll", () => {
  navbar();
});


document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.burger').classList.toggle('burgered')
    document.querySelector('.mobile').classList.toggle('active')
})