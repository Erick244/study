let paragrafo = document.createElement('p')

let texto = document.createTextNode("Este é um paragrafo criado em JS")

paragrafo.appendChild(texto)


let body = document.querySelector("body")

body.appendChild(paragrafo)


//H1

let h1 = document.createElement('h1')
let titulo = document.createTextNode('Este é meu titulo criado em JavaScript')
h1.appendChild(titulo)
let teste = document.querySelector('.teste')
teste.appendChild(h1)