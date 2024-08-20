import data from './data.js'

const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')
const slidesContainer = document.querySelector('.slider')
const sliderNavContainer = document.querySelector('.slider-nav')

let reviews = [...data]

if (reviews.length === 1) {
  leftArrow.style.display = 'none'
  rightArrow.style.display = 'none'
  sliderNavContainer.style.display = 'none'
}

const createSlides = function () {
  slidesContainer.innerHTML = reviews
    .map((r, i) => {
      let { name, text, source } = r
      let position = 'next'

      if (i === 0) position = 'active'
      if (i === reviews.length - 1) position = 'last'
      if (reviews.length === 1) position = 'active'

      return `<div class="slide ${position}" data-slide='${i + 1}'>
                    <h3>${name}</h3>
                    <blockquote>${text}</blockquote>
                    <span>Zdroj recenzií:&nbsp;<img src="./assets/icons/${source}-logo.svg" alt="Logo ${source}"></span>
                    </div>`
    })
    .join('')
}

const createSliderNavigation = function () {
  sliderNavContainer.innerHTML = reviews
    .map((_, i) => {
      return `<span ${i === 0 ? 'class="active-slide"' : ''} data-slide='${
        i + 1
      }'></span>`
    })
    .join('')
}

export { createSlides, createSliderNavigation }
