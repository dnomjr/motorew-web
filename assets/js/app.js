'use strict'

const menuIcon = document.querySelector('.menu-btn')
const menuOverlay = document.querySelector('.overlay')

const toggleNav = function () {
  menuOverlay.classList.toggle('show')
  menuIcon.classList.toggle('open')
}

menuIcon.addEventListener('click', toggleNav)

