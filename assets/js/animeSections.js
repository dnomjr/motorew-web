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

/*   if (
  entry.isIntersecting &&
  entry.intersectionRatio > 0.3 &&
  entry.target.classList.contains('about')
) {
  setTimeout(() => {
    entry.target.classList.remove('section-hidden')
  }, 500)
  return
} */
