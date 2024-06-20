let p = new Promise(function(resolve) {
    resolve(['bmw', 'mercedes', 'ferrari', 'maclaren']);
})

const getPrimeiroElemento = array => array[0];

const transformarEmMaiusculas = string => string.toUpperCase();

p.then(getPrimeiroElemento)
    .then(transformarEmMaiusculas)
        .then(console.log);