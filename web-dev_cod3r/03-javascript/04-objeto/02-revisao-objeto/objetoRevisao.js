// coleção dinamica de pares chave/valor
const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;

console.log(produto);
delete produto.preco;

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        endereco: {
            logradouro: 'Rua ABC',
            numero: 999
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'ana',
        idade: 22
    }],
    calcularValorSeguro() {
        //...
    }
}

carro.proprietario.endereco.numero = 1111;
console.log(carro);