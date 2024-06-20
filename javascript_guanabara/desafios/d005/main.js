function km(m) {
    let x = m / 1000
    return x.toFixed(3).replace('.', ',')
}
function hm(m) {
    let x = m / 100
    return x.toFixed(3).replace('.', ',')
}
function dam(m) {
    let x = m / 10
    return x.toFixed(3).replace('.', ',')
}
function dm(m) {
    let x = m * 10
    return x.toFixed(3).replace('.', ',')
}
function cm(m) {
    let x = m * 100
    return x.toFixed(3).replace('.', ',')
}
function mm(m) {
    let x = m * 1000
    return x.toFixed(3).replace('.', ',')
}


function btn() {
    let metro1 = document.querySelector('#metro')
    let resp = document.querySelector('.resp')
    let metro = Number(metro1.value)
    if (metro.length == 0 || metro <= 0) {
        alert('[Erro] Valor invalido ou não preenchido.')
    } else {
        resp.innerHTML = ''
        resp.innerHTML = `<hr>`
        resp.innerHTML = `<h3>A distancia de ${metro} metros, corresponde a...</h3>`
        resp.innerHTML += `<p>${km(metro)} quilômetros (Km)</p>`
        resp.innerHTML += `<p>${hm(metro)} hectômetros (Hm)</p>`
        resp.innerHTML += `<p>${dam(metro)} decâmetros (Dam)</p>`
        resp.innerHTML += `<p>${dm(metro)} decimetros (Dm)</p>`
        resp.innerHTML += `<p>${cm(metro)} centimetos(Cm)</p>`
        resp.innerHTML += `<p>${mm(metro)} milimetos(Cm)</p>`
    }
}