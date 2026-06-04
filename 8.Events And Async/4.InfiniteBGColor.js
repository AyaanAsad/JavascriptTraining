const RandomColor = function(){
  const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
  let color = '#'
  for(let i=0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)]
  }
  const body = document.querySelector('body')
  body.style.backgroundColor = color
}

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
let Interval

start.addEventListener('click', (e) => {
  if(!Interval){
    Interval = setInterval(RandomColor, 1000)
  }
  
})

stop.addEventListener('click', (e) => {
  clearInterval(Interval)
  Interval = null
})