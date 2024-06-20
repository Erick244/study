let dobro = function (a) {
    return a * 2;
}

dobro = (a) => {
    return a * 2;
}

dobro = a => 2 * a; // return implicito
console.log(dobro(Math.PI));

let ola = function () {
    return 'Olá';
}

ola = () => 'Ola';
ola = _ => 'Ola'; // estrategia de parametro 'invisivel'
console.log(ola());