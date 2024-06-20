function filtrarPorQuantidadeDeDigitos(array, quantidade) {
    const newArray = [];
    array.forEach(element => {
        const lengthDigitos = element.toString().length
        lengthDigitos == quantidade ? newArray.push(element) : null
    });
    return newArray;
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2));