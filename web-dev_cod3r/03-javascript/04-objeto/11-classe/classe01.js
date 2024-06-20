class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinaceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamento = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    sumario() {
        let valorConsolidado = 0;
        this.lancamento.forEach(l => {
            valorConsolidado += l.valor;
        })
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salario', 45000);
const contaLuz = new Lancamento('Luz', -220);

const contas = new CicloFinaceiro(6, 2018);
contas.addLancamentos(salario, contaLuz);
console.log(contas.sumario());
