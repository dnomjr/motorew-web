const menuIcon = document.querySelector('.menu-btn')
const menuOverlay = document.querySelector('.overlay')

const showMenu = () => {
  menuOverlay.classList.toggle('show')
  menuIcon.classList.toggle('open')
}

export default showMenu
