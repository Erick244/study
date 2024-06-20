// console.log(Math.ceil(6.1));

const obj1 = {}
obj1.nome = 'Lapis';
// console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome;
    this.teste = function() {
        console.log('TESTE')
    }
}
const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');

console.log(obj2);
console.log(obj3);