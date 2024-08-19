'use strict'

import createSlides from './createSlides.js'
import changeSlide, { activateSliderNav } from './changeSlide.js'

const menuIcon = document.querySelector('.menu-btn')
const menuOverlay = document.querySelector('.overlay')
const links = document.querySelectorAll('nav a')
const rightArrow = document.querySelector('.right-arrow')
const leftArrow = document.querySelector('.left-arrow')
const sliderNav = document.querySelector('.slider-nav')
const slidesContainer = document.querySelector('.slider')

const prevSlide = changeSlide.bind('prev')

let startingX, endingX
let moving = false

const start = function (e) {
  startingX = e.touches[0].clientX
}
slidesContainer.addEventListener('touchstart', start)

const move = function (e) {
  moving = true
  endingX = e.touches[0].clientX
}
slidesContainer.addEventListener('touchmove', move)

const end = function (e) {
  if (!moving) return
  if (endingX > startingX && endingX - startingX > 25) prevSlide()
  if (endingX < startingX && startingX - endingX > 25) changeSlide()
}
slidesContainer.addEventListener('touchend', end)

const showMenu = () => {
  menuOverlay.classList.toggle('show')
  menuIcon.classList.toggle('open')
}

const switchSlide = function (e) {
  const slide = e.target.dataset.slide

  if (slide) {
    const slides = document.querySelectorAll('.slide')
    slides.forEach(function (s) {
      s.className = ''
      s.classList.add('slide', 'next')
    })

    const active = document.querySelector(`.slide[data-slide="${slide}"]`)
    let last = active.previousElementSibling
    if (!last) last = slidesContainer.lastElementChild

    active.classList.remove('next')
    active.classList.add('active')
    last.classList.remove('next')
    last.classList.add('last')
    activateSliderNav(slide)
  }
}

createSlides()

links.forEach(link => {
  link.addEventListener('click', showMenu)
})
menuIcon.addEventListener('click', showMenu)
rightArrow.addEventListener('click', changeSlide)
leftArrow.addEventListener('click', prevSlide)
sliderNav.addEventListener('click', switchSlide)

/* const slides = document.querySelectorAll('.slide')

 */

/* let currSlide = 0
const maxSlide = slides.length 
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
init() */

/* const scrollToSection = function (e) {
  showMenu()
} */
