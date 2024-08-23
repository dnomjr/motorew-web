import { swipeNextSlide } from './changeSlide.js'

const swipePrevSlide = swipeNextSlide.bind('prev')

let startingX, endingX
let moving = false

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

export { start, move, end }
