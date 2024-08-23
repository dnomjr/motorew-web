const sections = document.querySelectorAll('section')
const motorbike = document.querySelector('.after')
const endPosition = 50
const startPosition = parseInt(getComputedStyle(motorbike).backgroundPosition)

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

const moveOnScroll = function (e) {
  let scrollPosition = Math.floor(window.scrollY) / 2
  if (startPosition - scrollPosition <= endPosition) return

  motorbike.style.backgroundPosition = startPosition - scrollPosition + '%'
}
window.addEventListener('scroll', moveOnScroll)
