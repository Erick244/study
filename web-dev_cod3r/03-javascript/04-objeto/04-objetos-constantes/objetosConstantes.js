// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro';
console.log(pessoa);

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa);
pessoa.nome = 'jorge';
pessoa.idade = 22;
delete pessoa.nome;

console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'Ana' });
console.log(pessoaConstante);