'use strict'

const menuIcon = document.querySelector('.menu-btn')
const menuOverlay = document.querySelector('.overlay')
const links = document.querySelectorAll('nav a')
const slides = document.querySelectorAll('.slide')
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')

let currSlide = 0
const maxSlide = slides.length

const showMenu = () => {
  menuOverlay.classList.toggle('show')
  menuIcon.classList.toggle('open')
}

links.forEach(link => {
  link.addEventListener('click', showMenu)
})

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`
  })
}
const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0
  } else {
    currSlide++
  }
  goToSlide(currSlide)
}

const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1
  } else {
    currSlide--
  }

  goToSlide(currSlide)
}

const init = function () {
  goToSlide(currSlide)
}
init()

menuIcon.addEventListener('click', showMenu)
rightArrow.addEventListener('click', nextSlide)
leftArrow.addEventListener('click', prevSlide)

/* const scrollToSection = function (e) {
  showMenu()
} */
