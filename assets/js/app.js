'use strict'

const openBtn = document.querySelector('.menu-btn')
/* const closeBtn = document.querySelector('.close')
 */ const menu = document.querySelector('.overlay-nav')

const toggleNav = function () {
  menu.classList.toggle('show')
  openBtn.classList.toggle('open')
}

openBtn.addEventListener('click', toggleNav)
/* closeBtn.addEventListener('click', toggleNav)
 */
