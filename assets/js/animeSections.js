const sections = document.querySelectorAll('section')

const revealSection = function (entries, observer) {
  const [entry] = entries
  console.log(
    entry.isIntersecting, entry.intersectionRatio,
    entry.target.classList.contains('about')
  )

  if (!entry.isIntersecting) return
  if (entry.isIntersecting &&
    entry.intersectionRatio > 0.15 &&
    entry.target.classList.contains('about')
  ) {
    setTimeout(() => {
      entry.target.classList.remove('section-hidden')
    },1000)
    return
  }

  entry.target.classList.remove('section-hidden')
  observer.unobserve(entry.target)
}
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
  /*   rootMargin: '-90px',
   */
})

sections.forEach(function (section) {
  if (!section.classList.contains('hero')) {
    sectionObserver.observe(section)
    section.classList.add('section-hidden')
  }
})
