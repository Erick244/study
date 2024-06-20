function esperarPor(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo);
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise...'));

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000);
    })
}

async function executar() {
    let valor = await retornarValor();

    await esperarPor(1500);
    console.log(`Async/Await ${valor}...`);

    await esperarPor(1500);
    console.log(`Async/Await ${valor + 1}...`);

    await esperarPor(1500);
    console.log(`Async/Await ${valor + 2}...`);

    return valor + 3;
}

async function executarDeVerdade() {
    const res = await executar();
    console.log(res);
}

executarDeVerdade();