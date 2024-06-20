const notas = [6.7, 7.4, 9.8, 8.1, 7.1];

for (let i in notas) {
    // console.log(notas[i]);
}

const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Silva',
    idade: 18,
    peso: 89
}

for(let atributo in pessoa) {
    console.log(pessoa[atributo]);
}