function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var txtano = Number(txtano.value)
    if (txtano <= 0 || txtano > ano) {
        alert('Erro. Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - txtano
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'imagens/crianca-m.png')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'imagens/crianca-f.png')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dados: ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
         
    }
    
}