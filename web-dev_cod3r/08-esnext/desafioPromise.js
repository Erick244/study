const fs = require('fs');

const caminho = __dirname + '/dados.txt';

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString());
        })
    })
}

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\r\n'))
        .then(linhas => linhas.join(', '))
            .then(consteudoFinal => `O valor final é: ${consteudoFinal}.`)
                .then(console.log);