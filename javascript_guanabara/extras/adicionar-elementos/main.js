// Criar elemento
let teste = document.createElement('div')

teste.classList = 'div-criada'

let divteste = document.querySelector('.div-teste')

//Inserindo elemrnto filho
divteste.appendChild(teste)

teste2 = document.createElement('p')

divteste.insertBefore(teste2, teste)

let texto = document.createTextNode('Este e um paragrafo que eu crieie e adicionei na minha div que tambei foi criada e adicionado via JS.')
teste2.appendChild(texto)
