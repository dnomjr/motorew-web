const slidesContainer = document.querySelector('.slider')

const swipeNav = function (slide) {
  document.querySelectorAll('.slider-nav span').forEach(function (s) {
    s.classList.remove('active-slide')
  })
  document
    .querySelector(`.slider-nav span[data-slide='${slide}']`)
    .classList.add('active-slide')
}

const swipeNextSlide = function () {
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

    swipeNav(last.dataset.slide)
    return
  }

  active.classList.add('last')
  next.classList.add('active')
  last.classList.add('next')

  swipeNav(next.dataset.slide)
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
    swipeNav(slide)
  }
}

export { swipeNextSlide, switchSlide }
