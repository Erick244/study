function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!');
            } else {
                resolve(valor);
            }
        } catch (e) {
            reject(e);
        }
    })
}

funcionarOuNao('Teste...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro dentro do then: ${err}`)
    )
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'));