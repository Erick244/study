package lambda;

import java.util.function.BinaryOperator;
import java.util.function.Function;
import java.util.function.UnaryOperator;

public class Desafio {

	public static void main(String[] args) {

		Produto produto = new Produto("Notebook", 3235.89, 0.13);

		BinaryOperator<Double> precoComDesconto = (preco, desconto) -> preco * (1 - desconto);

		UnaryOperator<Double> impostoMunicipal = valor -> {
			if (valor >= 2500) {
				double imposto = 0.085 * valor;
				return valor + imposto;
			} else {
				return valor;
			}
		};

		UnaryOperator<Double> calcularFrete = valor -> {
			if (valor >= 3000) {
				return valor + 100;
			} else {
				return valor + 50;
			}
		};

		UnaryOperator<Double> arredondarValor = numero -> {;
			Double valorArredondado = Double.parseDouble(String.format("%.2f", numero));
			return valorArredondado;
		};

		Function<Double, String> formatarPreco = preco -> {
			String precoComVirgula = preco.toString().replace(".", ",");
			return "R$" + precoComVirgula;
		};

		String resultado = precoComDesconto
				.andThen(impostoMunicipal)
				.andThen(calcularFrete)
				.andThen(arredondarValor)
				.andThen(formatarPreco)
				.apply(produto.preco, produto.desconto);
		System.out.println(resultado);
	}
}
