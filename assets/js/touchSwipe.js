'use strict'

import { swipeNextSlide } from './changeSlide.js'

const swipePrevSlide = swipeNextSlide.bind('prev')
const slider = document.querySelector('.slider-wrapper')

let startingX, startingY, endingX, endingY
let scrollDetect
let moving = false

const scrollFunc = function () {
  scrollDetect = true
}

const start = function (e) {
  startingX = e.touches[0].clientX
  startingY = e.touches[0].clientY

  window.addEventListener('scroll', scrollFunc)
}

const move = function (e) {
  moving = true

  endingX = e.touches[0].clientX
  endingY = e.touches[0].clientY
  console.log(endingY, startingY, endingX, startingX)
}

const end = function () {
  if (!moving) return
  if (scrollDetect) {
    scrollDetect = false
    return window.removeEventListener('scroll', scrollFunc)
  }

  if (endingX > startingX && endingX - startingX > 25) swipePrevSlide()
  if (endingX < startingX && startingX - endingX > 25) swipeNextSlide()
  moving = false
}

export { start, move, end }
