"use strict";
class Empresa {
    constructor(nome) {
        this.nome = nome;
    }
}
const empresa = new Empresa('Twitch');
console.log(empresa.nome);
