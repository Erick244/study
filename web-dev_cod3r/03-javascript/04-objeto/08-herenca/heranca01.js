const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const bmw = {
    modelo: 'm4',
    velMax: 250
}

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(bmw.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype)