'use strict'

const menuIcon = document.querySelector('.menu-btn')
const menuOverlay = document.querySelector('.overlay')
const links = document.querySelectorAll('nav a')

const showOverlay = () => menuOverlay.classList.toggle('show')

const toggleNav = function () {
  showOverlay()
  menuIcon.classList.toggle('open')
  document.body.classList.toggle('no-scroll')
}

const scrollSection = function (e) {
  console.log(e.target)
  showOverlay()
}

links.forEach(link => {
  link.addEventListener('click', scrollSection)
})

menuIcon.addEventListener('click', toggleNav)
