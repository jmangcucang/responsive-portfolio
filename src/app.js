const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const mediaScreen = window.matchMedia('(min-width: 1400px)')
function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

mediaScreen.onchange = (e) => {
    if (e.matches) {
        $('.tools-container .tools-card').show()
    } else {
        $('.tools-container .tools-card').hide()
        $('.tools-container .tools-card:first-child').show()
    }
}