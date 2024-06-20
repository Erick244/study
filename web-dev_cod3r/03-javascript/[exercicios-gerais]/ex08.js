function multiplicar(num1, num2) {
    let resultado = 0;
    for (let i = 0; i < num1; i++) {
        resultado += num2;
    }
    return resultado;
}

console.log(multiplicar(5, 5));