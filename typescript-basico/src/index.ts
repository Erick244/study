class Empresa {
    public nome: string;

    constructor (nome: string) {
        this.nome = nome;
    }
}

const empresa = new Empresa('Twitch');
console.log(empresa.nome)