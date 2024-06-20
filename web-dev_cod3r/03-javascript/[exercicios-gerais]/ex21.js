function menorNumero(array) {
    let menor = array[0];
    array.forEach(e => {
        if (menor > e) {
            menor = e;
        }
    })
    return menor;
}

console.log(menorNumero([1, 2, 4, 5, -10]));
