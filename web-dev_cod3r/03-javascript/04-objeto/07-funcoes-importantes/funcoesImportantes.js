const pessoa = {
    nome: 'Maikon',
    idade: 32,
    peso: 89
}

// console.log(Object.keys(pessoa));

// console.log(Object.values(pessoa));

// console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
    // console.log(`${e[0]}: ${e[1]}`)
})

Object.defineProperty(pessoa, 'dataNas', {
    enumerable: false,
    writable: false,
    value: '01/01/9999'
})

// console.log(pessoa.dataNas);

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2);
// console.log(obj);

Object.freeze(obj);
obj.c = 1234
console.log(obj)