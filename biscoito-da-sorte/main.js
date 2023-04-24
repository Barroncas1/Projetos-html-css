const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const cookieClick = document.querySelector('#cookieClick')
const btnRetry = document.querySelector('#btnRetry')

cookieClick.addEventListener('click', toggleScreen)
btnRetry.addEventListener('click', toggleScreen)

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}