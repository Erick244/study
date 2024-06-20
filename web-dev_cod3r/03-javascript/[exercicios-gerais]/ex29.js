function segundoMaior(array) {
    function maior(array) {
        let maior = array[0];
        let indice = 0;
        array.forEach((e, i) => {
            if (maior < e) {
                maior = e;
                indice = i;
            }
        });
        return [maior, indice];
    }
    const numeroMaior = maior(array);
    array.splice(numeroMaior[1], 1);
    return maior(array)[0];
}

console.log(segundoMaior([12, 16, 1, 9]));