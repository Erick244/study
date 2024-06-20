// // Maneira sem o OCP
// class CalcularComDesconto {
// 	valores: number[];
// 	total: number = 0;
var BlueCard = /** @class */ (function () {
    function BlueCard() {
    }
    BlueCard.prototype.descontar = function (valor) {
        return valor -= 35.89;
    };
    return BlueCard;
}());
var RedCard = /** @class */ (function () {
    function RedCard() {
    }
    RedCard.prototype.descontar = function (valor) {
        return valor -= 15.89;
    };
    return RedCard;
}());
var CalcularComDesconto = /** @class */ (function () {
    function CalcularComDesconto(valores, desconto) {
        this.valores = valores;
        this.desconto = desconto;
    }
    CalcularComDesconto.prototype.calcular = function () {
        var totalSemDesconto = this.valores.reduce(function (acumulador, valor) {
            return valor + acumulador;
        }, 0);
        var totalComDesconto = this.desconto.descontar(totalSemDesconto);
        return totalComDesconto;
    };
    return CalcularComDesconto;
}());
var valores = [1, 355, 992, 123];
var desconto = new RedCard();
var calcularComDesconto = new CalcularComDesconto(valores, desconto);
console.log(calcularComDesconto.calcular());
