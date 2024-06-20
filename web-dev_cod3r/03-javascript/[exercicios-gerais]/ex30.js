function recerberMelhorEstudante(obj) {
    const melhorEstudante = {};
    let maiorMedia = null;
    let nomeMaiorMedia = null;
    for (const key in obj) {
        const soma = obj[key].reduce((a, e) => a + e);
        const media = soma / obj[key].length;
        if (maiorMedia < media) {
            maiorMedia = media;
            nomeMaiorMedia = key;
        }
    }
    melhorEstudante[nomeMaiorMedia] = maiorMedia;
    return melhorEstudante;
}

console.log(recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}));

