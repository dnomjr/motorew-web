const sections = document.querySelectorAll('section')
const navbar = document.querySelector('header')

const scrollTo = (closeMenu, e) => {
  e.preventDefault()

  const id = e.target.getAttribute('href').slice(1)
  const section = document.getElementById(id)

  const navHeight = navbar.getBoundingClientRect().height
  let position = section.offsetTop - navHeight

  /* if (
    section.classList.contains('gallery') ||
    section.classList.contains('reviews')
  )
    position = position - 10 */

  window.scrollTo({
    left: 0,
    top: position,
  })
  closeMenu()
}

export default scrollTo
