function somarDispesas(array) {
    const getPreco = e => e.preco;
    const somar = (a, e) => a + e;
    const resultado = array.map(getPreco).reduce(somar);
    return resultado;
}

console.log(somarDispesas([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
]))