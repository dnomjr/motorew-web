import { swipeNextSlide } from './changeSlide.js'

const swipePrevSlide = swipeNextSlide.bind('prev')
const slider = document.querySelector('.slider-wrapper')

let startingX, startingY, endingX, endingY
let scrollDetect = true
let moving = false

const start = function (e) {
  startingX = e.touches[0].clientX
  startingY = e.touches[0].clientY

  scrollDetect = true
}
const scrollFunc = function () {
  scrollDetect = false
}

const move = function (e) {
  moving = true
  endingX = e.touches[0].clientX
  endingY = e.touches[0].clientY
  window.addEventListener('scroll', scrollFunc)
}

const end = function (e) {
  if (!moving || !scrollDetect) return

  if (endingX > startingX && endingX - startingX > 25) swipePrevSlide()
  if (endingX < startingX && startingX - endingX > 25) swipeNextSlide()
  moving = false
  window.removeEventListener('scroll', scrollFunc)
}

export { start, move, end }
