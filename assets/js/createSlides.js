import reviews from './data.js'

const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')
const slidesContainer = document.querySelector('.slider')
const sliderNavContainer = document.querySelector('.slider-nav')

let slides = [...reviews]

const createSlides = function () {
  /*   console.log(slides)
   */
  if (reviews.length === 1) {
    leftArrow.style.display = 'none'
    rightArrow.style.display = 'none'
    sliderNavContainer.style.display = 'none'
  }

  slidesContainer.innerHTML = reviews
    .map((r, i) => {
      let { name, text, source } = r
      let position = 'next'

      if (i === 0) position = 'active'
      if (i === reviews.length - 1) position = 'last'

      return `<div class="slide ${position}" data-slide='${i + 1}'>
                    <h3>${name}</h3>
                    <blockquote>${text}</blockquote>
                    <span>Zdroj recenzií:&nbsp;<img src="./assets/icons/${source}-logo.svg" alt=""></span>
                    </div>`
    })
    .join('')

  sliderNavContainer.innerHTML = reviews
    .map((_, i) => {
      return `<span ${i === 0 ? 'class="active-slide"' : ''} data-slide='${
        i + 1
      }'></span>`
    })
    .join('')
}

export default createSlides
