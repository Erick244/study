function btn() {
    let cotaçao_dolar = document.querySelector('#atual')
    let reais = document.querySelector('#reais')
    if (cotaçao_dolar.value.length == 0 || reais.value.length == 0 || cotaçao_dolar.value < 1 || reais.value < 1) {
        alert('[ERRO] Valores invalidos ou não preenchidos!')
    } else {
        let resp = document.querySelector('.resp')
        resp.innerHTML = ''
        resp.innerHTML += `<hr>`
        let cd = Number(cotaçao_dolar.value)
        let rs = Number(reais.value)
        let dolar = rs / cd
        resp.innerHTML += `<p><strong>Com R$${rs.toFixed(2).replace('.', ',')} você consegue comprar US$${dolar.toFixed(2)}</strong></p>`
    }
}