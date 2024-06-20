function calcularMedia(array) {
    const soma = array.reduce((a, e) => a + e);
    return soma / array.length;
}

console.log(calcularMedia([0, 10]))