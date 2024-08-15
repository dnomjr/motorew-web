'use strict'

const menuIcon = document.querySelector('.menu-btn')
const menuOverlay = document.querySelector('.overlay')
const links = document.querySelectorAll('nav a')

const showMenu = () => {
  menuOverlay.classList.toggle('show')
  menuIcon.classList.toggle('open')
}

const scrollToSection = function (e) {
  e.preventDefault()
  showMenu()
}

links.forEach(link => {
  link.addEventListener('click', scrollToSection)
})

menuIcon.addEventListener('click', showMenu)
