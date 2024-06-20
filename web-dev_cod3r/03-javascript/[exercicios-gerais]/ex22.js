function funcaoDaSorte(numero) {
    const numeroGerado = Math.floor(Math.random() * 11);
    if (numero == numeroGerado) {
        return `Parabéns! O número sorteado foi o ${numeroGerado}.`;
    } else {
        return `Que pena! O número sorteado foi o ${numeroGerado}.`;
    }
}

console.log(funcaoDaSorte(7));
