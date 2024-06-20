function finalizar() {
    let nome = document.getElementById('nomeP')
    let preço = document.getElementById('preçoP')
    let valor = document.getElementById('valor')
    let res = document.getElementById('resp')
    if (nome.value.length == 0 || preço.value.length == 0 || valor.value.length == 0 || preço.value < 0 || valor.value < 0) {
        alert('Dados invalidos ou não preenchidos.')
    } else {
        res.innerHTML = `<hr>`
        res.innerHTML += `<p>Você comprou um ${nome.value} que custou R$${preço.value}.</p>`
        res.innerHTML += `<p>Deu R$${preço.value}, em dinheiro e vai receber R$${Number(valor.value) - Number(preço.value)} de troco.</p>`
        res.innerHTML += 'Volte Sempre! :)'
    }
}