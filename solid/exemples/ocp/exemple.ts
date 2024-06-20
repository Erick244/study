// // Maneira sem o OCP
// class CalcularComDesconto {
// 	valores: number[];
// 	total: number = 0;


// 	constructor(valores: number[]) {
// 		this.valores = valores;
// 	}

// 	calcular() {
// 		const total = this.valores.reduce((acumulador: number, valor: number) => {
// 			return valor + acumulador;
// 		}, 0)

// 		this.total = total;
// 	}

// 	decontar(metodoDeDesconto: string) {
// 		if (metodoDeDesconto === "Blue Card") {
// 			this.total -= 35.89;
// 		} else if (metodoDeDesconto === "Red Card") {
// 			this.total -= 15.89;
// 		}
// 	}
// }

// const valores = [1 , 355, 992, 123];
// const calcularComDesconto = new CalcularComDesconto(valores);
// calcularComDesconto.calcular();
// calcularComDesconto.decontar("Red card");
// console.log(calcularComDesconto.total);


// Metodo usando o OCP
interface Desconto {
	descontar: (valor: number) => number;
}

class BlueCard implements Desconto {
	descontar(valor: number): number {
		return valor -= 35.89;
	}
}

class RedCard implements Desconto {
	descontar(valor: number): number {
		return valor -= 15.89;
	}
}


class CalcularComDesconto {
	valores: number[];
	desconto: Desconto;


	constructor(valores: number[], desconto: Desconto) {
		this.valores = valores;
		this.desconto = desconto;
	}

	calcular() {
		const totalSemDesconto = this.valores.reduce((acumulador: number, valor: number) => {
			return valor + acumulador;
		}, 0);

		const totalComDesconto = this.desconto.descontar(totalSemDesconto);

		return totalComDesconto
	}
}

const valores = [1, 355, 992, 123];
const desconto = new RedCard();
const calcularComDesconto = new CalcularComDesconto(valores, desconto);
console.log(calcularComDesconto.calcular());