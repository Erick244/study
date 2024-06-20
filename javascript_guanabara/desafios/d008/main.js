function btn() {
    //Pegando elementos
    let desconto = document.querySelector('#desconto')
    let nome = document.querySelector('#nome')
    let preço = document.querySelector('#preço')
    let resp = document.querySelector('.resp')
    if (desconto.value.length == 0 || desconto.value < 1 || nome.value.length == 0 || preço.value.length == 0 || preço.value < 1) {
        //Tratamento de erro
        alert('[ERRO] Dados invalidos ou não preenchido, verifique.')
    } else {
        let d = Number(desconto.value)
        let n = String(nome.value)
        let p = Number(preço.value)
        let total = (d/100)*p
        let full = p - total
        resp.innerHTML = ``
        resp.innerHTML += `<hr>`
        resp.innerHTML += `<p>O preço original era <strong>R$${p.toFixed(2).replace('.', ',')}</strong></p>`
        resp.innerHTML += `<p>Você acaba de ganhar <strong>R$${total.toFixed(2).replace('.', ',')}</strong> de desconto (-<strong>${d}%</strong>)</p>`
        resp.innerHTML += `<p>No fim, você vai pagar <strong>R$${full.toFixed(2).replace('.', ',')}</strong> no produto <strong>${n}</strong></p>`
    }
}