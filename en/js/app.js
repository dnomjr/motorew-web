'use strict'

import { createSlides, createSliderNavigation } from './createFunctions.js'
import { swipeNextSlide, switchSlide } from './changeSlide.js'
import { start, move, end } from './touchSwipe.js'
import scrollTo from './scrollTo.js'
import showMenu from './toggleMenu.js'
import './animations.js'

const menuIcon = document.querySelector('.menu-btn')
const links = document.querySelectorAll('nav a')
const rightArrow = document.querySelector('.right-arrow')
const leftArrow = document.querySelector('.left-arrow')
const sliderOutline = document.querySelector('.slider-nav')
const slidesContainer = document.querySelector('.slider')
const actualYear = document.querySelector('.year')
const ctaBtn = document.querySelector('.hero a')

const swipePrevSlide = swipeNextSlide.bind('prev')

const date = new Date().getFullYear()
actualYear.textContent = date

const init = function () {
  createSlides()
  createSliderNavigation()
}
init()

menuIcon.addEventListener('click', showMenu)
rightArrow.addEventListener('click', swipeNextSlide)
leftArrow.addEventListener('click', swipePrevSlide)
sliderOutline.addEventListener('click', switchSlide)

slidesContainer.addEventListener('touchstart', start)
slidesContainer.addEventListener('touchmove', move)
slidesContainer.addEventListener('touchend', end)

links.forEach(link => {
  link.addEventListener('click', scrollTo.bind(null, showMenu))
})
ctaBtn.addEventListener('click', scrollTo.bind(null, showMenu))
