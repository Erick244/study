// par nome/valor

const saudacao = 'Opa'; // contexto léxico 1

function exec() {
    const ola = 'Hello World'; // contexto léxico 2
    return ola;
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        saopaulo: 'Rua Vista Bela',
        numero: 999
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);