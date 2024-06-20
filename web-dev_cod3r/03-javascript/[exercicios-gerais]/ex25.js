function buscarPalavrasSemelhantes(busca, palavra) {
    const tamanhoBusca = busca.length;
    const resultadoBusca = [];
    palavra.forEach(element => {
        const pegarPalavra = element.substring(0, tamanhoBusca);
        if (pegarPalavra.toLowerCase() === busca.toLowerCase()) {
            resultadoBusca.push(element);
        }
    })
    return resultadoBusca;
}

console.log(buscarPalavrasSemelhantes('pro', ['Professor', 'Cursos', 'Aprender', 'Programação']));