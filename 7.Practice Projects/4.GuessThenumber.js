const number = Math.round((Math.random() * 100) + 1)
console.log(number)

const guess = document.querySelector('.guessField')
const sub = document.querySelector('#subt')
const prevGuess = document.querySelector('.guesses')
const remainGuess = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi');

let prevg = []

sub.addEventListener('click', (e) => {
  e.preventDefault()
  if(guess.value != number)
  {
    remainGuess.textContent = (parseInt(remainGuess.textContent))-1
    prevg.push(guess.value)
    prevGuess.innerHTML=prevg

    if(number > guess.value)
    {
      lowOrHi.innerHTML='Go higher'
    }
    else
    {
      lowOrHi.innerHTML='Go Lower'
    }

    if(parseInt(remainGuess.textContent) == 0)
    {
      remainGuess.innerHTML=`You Loose :( The number was ${number}`
    }
    guess.value = null
  }
  else
  {
    remainGuess.innerHTML=`Yipee You got it ! The number was ${number}`
    lowOrHi.innerHTML=null
  }
})