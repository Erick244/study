function contarCaractere(letra, frase) {
    const arrayFrase = frase.split('');
    const arrayResultado = [];
    arrayFrase.forEach(e => {
        if (e === letra) {
            arrayResultado.push(e);
        }
    })
    return arrayResultado.length;
}

console.log(contarCaractere('a', 'Ola meu nome é Ana Julia.'));
console.log(contarCaractere('C', 'Meu nome é Carlos e eu gosto de caros.'));