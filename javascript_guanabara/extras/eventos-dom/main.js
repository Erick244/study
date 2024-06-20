// click
let btn = document.querySelector('#btn')

btn.addEventListener('click', function() {
   
    console.log('clicou')

    this.style.color = 'blue'
})

// dblclick
let h1 = document.querySelector('.h1')

h1.addEventListener('dblclick', function() {
    console.log('Você deu dois clicks')
    h1.innerHTML = 'Titulo dlbclick'
})

// mouseover

let h2 = document.querySelector('.h2')
let p = document.querySelector('#esc')

h2.addEventListener('mouseover', function() {
    p.classList.remove("esc")
})

// mouseout

h2.addEventListener('mouseout', function() {
    p.classList.add('esc')

})

// keydown

document.addEventListener('keydown', function(event) {

    if(event.key == 'Enter') {
        console.log('Apertou enter')
    }

})

// keyup

document.addEventListener('keyup', function(event) {

    if(event.key == 'Enter') {
        console.log('Soltou enter')
    }

})
