function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

const produto1 = criarProduto('Caneta', 1.50);
console.log(produto1)