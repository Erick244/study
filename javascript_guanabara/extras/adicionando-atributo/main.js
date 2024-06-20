let c = 2
function lampada() {
    let img = document.querySelector('.img')
    if (c % 2 == 0) {
        img.setAttribute('src', 'on.png')
    } else {
        img.setAttribute('src', 'off.png')
    }
    c++
}
