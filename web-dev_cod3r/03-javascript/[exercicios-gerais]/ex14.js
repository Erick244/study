function objetoParaArray(obj) {
    const newArray = [];
    for (let chave in obj) {
        newArray.push([chave, obj[chave]]);
    }
    return newArray;
}

console.log(objetoParaArray({nome: 'João', idade: 22}));