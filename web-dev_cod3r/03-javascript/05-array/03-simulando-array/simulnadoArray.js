const quaseArray = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Lucas'
}
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0]);

const meuArray = ['Rafael', 'Ana', 'Lucas']
console.log(quaseArray.toString(), meuArray);