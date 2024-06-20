function primeiroEUltimoElemento(array) {
    return [array.shift(), array.pop()];
}

console.log(primeiroEUltimoElemento(['ola', 1, 2, 3, 4, 5, 6]));