let lista = []
function add() {
    let num = document.getElementById('txtn')
    let n = Number(num.value)
    if (lista.indexOf(n) == -1 && n != '' && n > 0 && n <= 100) {
        lista.push(n)
        let res = document.getElementById('resp')
        res.innerHTML = ''
        let tab = document.getElementById('tab')
        let item = document.createElement('option')
        item.text = `O numero ${n} foi adicionado.`
        tab.appendChild(item)
    } else {
        alert('Valor invalido ou já está na lista.')
    }
    num.value = ''
    num.focus()
}
function final () {
    if (lista.length == 0) {
        alert('Adicione valores para finalizar.')
    } else {
        let res = document.getElementById('resp')
        res.innerHTML += `<p>Ao todo temos ${lista.length} valores.</p>`
        let mai = lista[0]
        let men = lista[0]
        let soma = 0
        for(let pos in lista) {
            if (lista[pos] > mai) {
                mai = lista[pos]
            }
            if (lista[pos] < men) {
                men = lista[pos]
            }
            soma += lista[pos]
        }
        res.innerHTML = ''
        res.innerHTML = `<hr>`
        res.innerHTML += `<p>O maior valor é ${mai}.</p>`
        res.innerHTML += `<p>O menor valor é ${men}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        let media = soma / lista.length
        res.innerHTML += `<p>A media dos valores é ${media.toFixed(2)}</p>`

    }
}