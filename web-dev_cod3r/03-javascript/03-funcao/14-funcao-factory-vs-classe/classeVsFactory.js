class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('João');
p1.falar();

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Pedro');
p2.falar();

// desafio da função construtora //

function Pessoa2(nome) {
    this.nome = nome;

    this.falar = () => console.log(`Meu nome é ${this.nome}`);
}

const p3 = new Pessoa2('Ricardo');
p3.falar();

console.log(p3);