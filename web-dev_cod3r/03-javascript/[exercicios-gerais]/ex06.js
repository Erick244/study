function inverso(valor) {
    const tipo = typeof valor;
    if (tipo == 'boolean') {
        return !valor
    } else if (tipo == 'number') {
        return -valor
    } else {
        console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`);
    }
}

console.log(inverso(10));
console.log(inverso(true));
console.log(inverso('aaa'))