

const mobileUl = document.querySelector('.mobileUl ul')

const burgerHandlerOpen = () => {
    mobileUl.classList.add('active')
}

const burgerHandlerClose = () => {
    mobileUl.classList.remove('active')
}

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop < document.documentElement.scrollTop ) {
      document.querySelector('.Navbar').classList.add('actived')
  } else {
    document.querySelector('.Navbar').classList.remove('actived')
  }
}
