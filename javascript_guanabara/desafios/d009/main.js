function btn() {
    let nome = document.querySelector('.nome').value
    let salario = document.querySelector('.salario').value
    let por = document.querySelector('.por').value
    if (nome.length == 0 || salario.length == 0 || salario < 1 || por.length == 0) {
        alert('[Erro] Valores invalidos ou não preenchidos.')
    } else {
        let resp = document.querySelector('.resp')
        resp.innerHTML = ''
        resp.innerHTML += '<hr>'
        let calc = (por/100)*salario
        let total = 0
        if (por < 0) {
            total = salario - calc * (-1)
            resp.innerHTML += `<h2>O salario de ${nome} foi rebaixado em ${por}%</h2>` 
        } else {
            total = salario + calc
            resp.innerHTML += `<h2>O salario de ${nome} foi aumentado em ${por}%</h2>`
        }
        resp.innerHTML += `<ul><li>O salário atual era R$${salario}
        <li>Reajsutando o salario em R$${calc.toFixed(2)}, ${nome} vai passar a receber R$${total.toFixed(2)}
        </ul>`


    }
}