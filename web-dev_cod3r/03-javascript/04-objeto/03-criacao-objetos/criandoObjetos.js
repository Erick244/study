// usando a notação literal
const obj1 = {}
console.log(obj1);

// Object em JS
const obj2 = new Object;
console.log(obj2);

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 1.50, 0.1);
const p2 = new Produto('Notebook', 2999, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('Ana', 2000, 5);
console.log(f1.getSalario());

// Object.creat
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// Uma função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info": "sou um json"}')