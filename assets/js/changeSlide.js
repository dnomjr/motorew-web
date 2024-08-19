const slidesContainer = document.querySelector('.slider')

export const activateSliderNav = function (slide) {
  document.querySelector('.active-slide').classList.remove('active-slide')
  document
    .querySelector(`.slider-nav span[data-slide='${slide}']`)
    .classList.add('active-slide')
}

const changeSlide = function (slide) {
  let last = document.querySelector('.last')
  let active = document.querySelector('.active')
  let next = active.nextElementSibling
  if (!next) next = slidesContainer.firstElementChild

  active.classList.remove('active')
  last.classList.remove('last')
  next.classList.remove('next')

  if (this === 'prev') {
    active.classList.add('next')
    last.classList.add('active')

    next = last.previousElementSibling
    if (!next) next = slidesContainer.lastElementChild
    next.classList.remove('next')
    next.classList.add('last')

    active = document.querySelector('.active')
    activateSliderNav(active.dataset.slide)
    return
  }

  active.classList.add('last')
  next.classList.add('active')
  last.classList.add('next')

  active = document.querySelector('.active')
  activateSliderNav(active.dataset.slide)
}

export default changeSlide
