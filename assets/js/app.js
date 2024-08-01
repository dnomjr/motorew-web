'use strict'

const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')
const menu = document.querySelector('.overlay-nav')

const toggleNav = function () {
  menu.classList.toggle('show')
}

openBtn.addEventListener('click', toggleNav)
closeBtn.addEventListener('click', toggleNav)
