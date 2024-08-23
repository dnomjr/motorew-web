const sections = document.querySelectorAll('section')
const navbar = document.querySelector('header')

const scrollTo = (closeMenu, e) => {
  e.preventDefault()

  const id = e.target.getAttribute('href').slice(1)
  const section = document.getElementById(id)

  const navHeight = navbar.getBoundingClientRect().height
  let position = section.offsetTop - navHeight

  window.scrollTo({
    left: 0,
    top: position,
  })
  closeMenu()
}

export default scrollTo
