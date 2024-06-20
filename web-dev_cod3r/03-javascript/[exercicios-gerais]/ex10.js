function simboloMais(vezez) {
    let simbolos = '';
    for (let i = 0; i < vezez; i++) {
        simbolos += '+';
    }
    return simbolos;
}

console.log(simboloMais(5))