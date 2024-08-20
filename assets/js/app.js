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

const date = new Date().getFullYear()
actualYear.textContent = date

const swipePrevSlide = swipeNextSlide.bind('prev')

let startingX, endingX
let moving = false

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
