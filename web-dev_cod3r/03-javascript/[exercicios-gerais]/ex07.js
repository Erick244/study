function estaEntre(numero, maximo, minimo, inclusivo = false) {
    return inclusivo ? numero == minimo || numero == maximo : numero > minimo && numero < maximo;
}

console.log(estaEntre(10, 20, 10, true));
console.log(estaEntre(10, 20, 8));