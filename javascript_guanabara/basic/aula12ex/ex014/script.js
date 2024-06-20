function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var per = document.getElementById('periodo')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Manha
        img.src = 'manha.png'
        document.body.style.background = '#6a9a2f'
        per.innerHTML = 'Manhã'
        

    } else if (hora >= 12 && hora < 18) {
        //Tarde
        img.src = 'tarde.png'
        document.body.style.background = '#ff7606'
        per.innerHTML = 'Tarde'
    } else {
        //Noite
        img.src = 'noite.png'
        document.body.style.background = '#163443'
        per.innerHTML = 'Noite'
    }
}
