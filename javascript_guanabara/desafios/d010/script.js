let img = document.querySelector('.imagem')
let c = 1
function verde() {
    img.setAttribute('src', 'imagens/verde.png')
}
function amarelo() {
    img.setAttribute('src', 'imagens/amarelo.png') 
}
function vermelho() {
    img.setAttribute('src', 'imagens/vermelho.png')
}
function auto() {
    c++
    let auto = document.querySelector('.auto')
    function autorun() {
        if (c % 2 == 0){
            auto.setAttribute('value', 'Parar')
            var out = setTimeout(function() {
                img.setAttribute('src', 'imagens/vermelho.png')
            }, 2000)
            var out2 = setTimeout(function() {
                img.setAttribute('src', 'imagens/amarelo.png')
            }, 3000)
            var out3 = setTimeout(function() {
                img.setAttribute('src', 'imagens/verde.png')
            }, 4000)
            var out4 = setTimeout(function() {
                autorun()
            }, 4000)
        }else {
            auto.setAttribute('value', 'Automatico')
            img.setAttribute('src', 'imagens/desligado.png')
        }     
    }
    autorun()
}