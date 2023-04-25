const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() * 10)
let attempts = 1

btnTry .addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

function handleTryClick(event) {
    event.preventDefault()
    const inputNumber = document.querySelector('#inputNumber')

    if (Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document.querySelector(".screen2 h2").innerText = `Acertou em ${attempts} tentativas.`
        console.log(attempts)
    }
    
    inputNumber.value = ''
    attempts++


}

function handleResetClick() {
    screen2.classList.add("hide")
    screen1.classList.remove("hide")
}

