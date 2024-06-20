function repetir(valor, vezez) {
    const newArray = [];
    for (let i = 0; i < vezez; i++) {
        newArray.push(valor)
    }
    return newArray;
}

console.log(repetir('teste', 3))