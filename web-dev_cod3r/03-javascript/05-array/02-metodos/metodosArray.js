const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop(); // remove o ultimo (massa quebrou o carro)
// console.log(pilotos);

pilotos.push('Vestappen');
// console.log(pilotos);

pilotos.shift(); // remove o primeiro
// console.log(pilotos);

pilotos.unshift('Hamilton');
// console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
// console.log(pilotos);

// remover
pilotos.splice(3, 1); // massa quebrou denovo
// // console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2) // novo array
// console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);