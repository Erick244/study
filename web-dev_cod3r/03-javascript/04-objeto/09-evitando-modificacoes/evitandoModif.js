// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'caneta',
    preco: 1.99,
    tag: 'promocao'
})

// console.log(Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Brracha Escolar';
delete produto.tag;
// console.log(produto);

// Object.seal
const pessoa = { nome: 'Maria', idade: 29 }
Object.seal(pessoa);
console.log(Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 30;
console.log(pessoa);

// Object.freeze = selado + valores constantes