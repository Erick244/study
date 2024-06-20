function removerVogais(palavra) {
    const arrayLetras = palavra.split('');
    const newArray = [];
    arrayLetras.forEach(e => {
        const min = e.toLowerCase()
        if (min != 'a' && min != 'e' && min != 'i' && min != 'o' && min != 'u') {
            newArray.push(e);
        }
    })
    const resultado = newArray.toString();
    return resultado.replace(/,/g, '');
}

console.log(removerVogais('Escola'))