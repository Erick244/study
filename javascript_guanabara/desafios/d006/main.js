function kelvin(c) {
    let kel = c + 273.15
    return kel.toFixed(2).replace('.', ',')
}
function fah(c) {
    let fah = (c * 1.8) + 32
    return fah.toFixed(2).replace('.', ',')
}


function botao() {
    let celB = document.querySelector('#cel')
    let cel = Number(celB.value)
    if (celB.value.length == 0 || cel < 1) {
        alert('[Erro] Valor invalido ou não preenchido.')
    } else {
        let resp = document.querySelector('.resp')
        resp.innerHTML = ''
        resp.innerHTML += `<hr>`
        resp.innerHTML += `<p>${kelvin(cel)}°K (Kelvin)</p>`
        resp.innerHTML += `<p>${fah(cel)}°F (Fahrenheit)</p>`
    }
}