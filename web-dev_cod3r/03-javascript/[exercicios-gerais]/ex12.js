function removerAtributo(obj, remover) {
    const newObj = obj;
    delete newObj[remover];
    return newObj;
}

console.log(removerAtributo({
    nome: 'Caneta',
    preco: 1.99,
    desconto: 0.50
}, 'desconto'))