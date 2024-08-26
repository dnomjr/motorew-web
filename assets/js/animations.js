/* ANIMATION SECTIONS REVEAL */
const sections = document.querySelectorAll('section')

const revealSection = function (entries, observer) {
  const [entry] = entries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('section-hidden')
  observer.unobserve(entry.target)
}
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
})

sections.forEach(function (section) {
  if (!section.classList.contains('hero')) {
    sectionObserver.observe(section)
    section.classList.add('section-hidden')
  }
})

/* ANIMATION MOTORBIKE MOVE */
const motorbike = document.querySelector('.after')
const startPosition = parseInt(getComputedStyle(motorbike).backgroundPosition)
const endPosition = 50
const scrollRange = document.querySelector('.about').getBoundingClientRect().top
const positionRange = startPosition - endPosition
const changePerPixel = positionRange / scrollRange + 0.03

const moveOnScroll = function () {
  const scrollPosition = Math.floor(window.scrollY)

  if (startPosition - scrollPosition * changePerPixel <= endPosition) return

  motorbike.style.backgroundPosition =
    startPosition - scrollPosition * changePerPixel + '%'
}
window.addEventListener('scroll', moveOnScroll)
