'use strict'

import { createSlides, createSliderNavigation } from './createFunctions.js'
import { swipeNextSlide, switchSlide } from './changeSlide.js'
import menuToggle from './menuToggle.js'
import './animeSections.js'

const menuIcon = document.querySelector('.menu-btn')
const links = document.querySelectorAll('nav a')
const rightArrow = document.querySelector('.right-arrow')
const leftArrow = document.querySelector('.left-arrow')
const sliderOutline = document.querySelector('.slider-nav')
const slidesContainer = document.querySelector('.slider')
const actualYear = document.querySelector('.year')
const motorbike = document.querySelector('.after')

let startingX, endingX
let moving = false
const endPosition = 50

const swipePrevSlide = swipeNextSlide.bind('prev')
const date = new Date().getFullYear()

let lastScroll = 0

let startPosition = parseInt(getComputedStyle(motorbike).backgroundPosition)

const moveOnScroll = function (e) {
  let scrollPosition = Math.floor(window.scrollY) / 2
  console.log(scrollPosition, startPosition)

  if (scrollPosition > lastScroll) {
  }

  if (startPosition - scrollPosition <= endPosition) return

  motorbike.style.backgroundPosition = startPosition - scrollPosition + '%'

  /*if (currentScroll > lastScroll) {
    for (let i = lastScroll + 1; i <= currentScroll; i++) {
      if (i < 1000)
        motorbike.style.backgroundPosition =
          startPosition + currentScroll + 'px'
    }
  }  else if (currentScroll < lastScroll) {
    for (let i = lastScroll - 1; i >= currentScroll; i--) {
      console.log(i)
      }
      } 

  lastScroll = currentScroll*/
}

actualYear.textContent = date

const init = function () {
  createSlides()
  createSliderNavigation()
}
init()

const start = function (e) {
  startingX = e.touches[0].clientX
}

const move = function (e) {
  moving = true
  endingX = e.touches[0].clientX
}

const end = function () {
  if (!moving) return
  if (endingX > startingX && endingX - startingX > 25) swipePrevSlide()
  if (endingX < startingX && startingX - endingX > 25) swipeNextSlide()
}

links.forEach(link => {
  link.addEventListener('click', menuToggle)
})
menuIcon.addEventListener('click', menuToggle)
rightArrow.addEventListener('click', swipeNextSlide)
leftArrow.addEventListener('click', swipePrevSlide)
sliderOutline.addEventListener('click', switchSlide)

slidesContainer.addEventListener('touchstart', start)
slidesContainer.addEventListener('touchmove', move)
slidesContainer.addEventListener('touchend', end)

window.addEventListener('scroll', moveOnScroll)
