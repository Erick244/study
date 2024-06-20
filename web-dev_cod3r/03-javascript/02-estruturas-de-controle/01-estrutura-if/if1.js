function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com', nota);
    }
}

soBoaNoticia(8);
soBoaNoticia(6.1);

function seForVerdade(valor) {
    if(valor) {
        console.log('É verdade...', valor);
    }
}

seForVerdade();
seForVerdade(undefined);
seForVerdade(null);
seForVerdade(NaN);
seForVerdade('');
seForVerdade(0);

seForVerdade(-1);
seForVerdade(' ');
seForVerdade('?');
seForVerdade([]);
seForVerdade([1, 2, 3]);
seForVerdade({});