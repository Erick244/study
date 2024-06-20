const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function (p) {
    return p.preco > 2400;
}))


const isFragil = e => e.fragil;
const isCaro = e => e.preco >= 500;

console.log(produtos.filter(isFragil).filter(isCaro));