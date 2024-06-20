const tecnologias = new Map();

tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

console.log(tecnologias.get('react'));

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

console.log(chavesVariadas)

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl);
})

console.log(chavesVariadas.has(123));
console.log(chavesVariadas.delete(123));
console.log(chavesVariadas.has(123));
