// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'X' // Evite

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr1, filho.attr2, filho.attr3, filho.attr0);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //Shadowing
}

const mercedes = {
    modelo: 'meca',
    status() {
        return `${this.modelo}: ${super.status()}`;
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(mercedes, carro);

console.log(ferrari);
console.log(mercedes);

mercedes.acelerar(100);
console.log(mercedes.status());

ferrari.acelerar(300);
console.log(ferrari.status());