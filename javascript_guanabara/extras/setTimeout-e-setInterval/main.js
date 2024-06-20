//Clear setInteval

let div = document.querySelector('.div-teste')
let h1 = document.querySelector('h1')
let c = 2
var intervalo = setInterval(function() {
    div.innerHTML += `<p>Teste</p>`
    if (c % 2 == 0) {
        h1.style.background = 'black'
        h1.style.color = 'white'
    } else {
        h1.style.background = 'white'
        h1.style.color = 'black'
    } c++
}, 500)

setTimeout(function() {
    div.innerHTML += `<p>Parei a div</p>`
    clearInterval(intervalo)
}, 3000)