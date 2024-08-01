'use strict'

const closeBtn = document.querySelector('.close-btn')
const openBtn = document.querySelector('.menu')
const menu = document.querySelector('.overlay-nav')

const toggleNav = function () {
  menu.classList.toggle('show')
}

openBtn.addEventListener('click', toggleNav)
closeBtn.addEventListener('click', toggleNav)
