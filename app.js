"use strict"

let numberChange = document.querySelector('.old')
let userGuess = document.querySelector('.input')
let checkNumber= document.querySelector('.bot')
let numberTrail = document.querySelector('.trial')
let guessed = document.querySelector('.bless')
let check = document.querySelector('.bot')
let reload = document.querySelector('.load')
let body = document.querySelector('body')


  Number(numberTrail.textContent)
 const lastNumber = function(numberTrail){
    if(numberTrail.textContent > 0){
      numberTrail.textContent--
    }else if(numberTrail.textContent == 0){
    window.location.reload()
    }
}
lastNumber(numberTrail)

function randomNumber(e){
    e.preventDefault()
    let compGuess = Math.ceil(Math.random() *6);
    if(!userGuess.value){
        guessed.textContent = 'input field cannot be empty'
        body.style.backgroundColor = 'black'
        lastNumber(numberTrail)

} else if (Number(userGuess.value) === compGuess){
    console.log('correct');
    body.style.backgroundColor = 'green'
    numberChange.textContent = `${compGuess}`
    lastNumber(numberTrail)
    guessed.textContent = `Correct you guessed ${userGuess.value} comp guessed ${compGuess}`
}else if(Number(userGuess.value) > compGuess){
    body.style.backgroundColor = 'blue'
    numberChange.textContent = `${compGuess}`
    lastNumber(numberTrail)
    guessed.textContent = `You guessed ${userGuess.value} which is higher than comp guess ${compGuess}`
}else if(Number(userGuess.value)<compGuess){
    body.style.backgroundColor = 'orange'
    numberChange.textContent = `${compGuess}`
    lastNumber(numberTrail)
    guessed.textContent = `You guessed ${userGuess.value} which is lesser than comp guess ${compGuess}`
}
}
check.addEventListener('click', randomNumber)


reload.addEventListener('click', ()=>{
    window.location.reload()
})






