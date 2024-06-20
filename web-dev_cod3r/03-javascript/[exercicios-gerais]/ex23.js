function contarPalavras(string) {
    const palavras = string.split(' ')
    return palavras.length;
}

console.log(contarPalavras('Este curso está me ajudando muito!'));