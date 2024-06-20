// Armezenando uma funcao em uma variavel

const imprimirSoma = function (x, y) {
    console.log(x + y);
}

// imprimirSoma(2, 3);

// Armazenando uma função arrow em uma variavel

const soma = (x, y) => {
    return x + y;
}

// console.log(soma(3, 4));

// retorno implicito

const subtracao = (x, y) => x - y;

// console.log(subtracao(10, 5));

const escrever = texto => console.log(texto);

escrever('Ola, Mundo!');