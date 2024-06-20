//Criar elemento
let p = document.createElement('p')

let textop = document.createTextNode('Eu sou o paragrafo criado e eu vou subistituir o h1')
p.appendChild(textop)

//Selecionado elemento que quero trocar
let titulo = document.querySelector('.t1')


// Selecionar o elemento pai
let pai = titulo.parentNode


pai.replaceChild(p, titulo)