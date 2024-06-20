// novo recurso do ES2015

const pessoa = {
    nome: 'Erick',
    idade: 16,
    endereco: {
        saopaulo: 'Rua 123',
        numero: 999
    }
}

const { nome, idade } = pessoa;

// console.log(nome);

const { nome: n, idade: i } = pessoa;
// console.log(n, i)

const { teste=true } = pessoa;
// console.log(teste);

const { endereco: { numero } } = pessoa;
console.log(numero);
