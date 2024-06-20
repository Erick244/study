package lambda;

import java.util.function.BiFunction;
import java.util.function.BinaryOperator;
import java.util.function.Function;

public class OperadorBinario {

	public static void main(String[] args) {
		
		BinaryOperator<Double> media = (nota1, nota2) -> (nota1 + nota2) / 2;
		System.out.println(media.apply(9.8, 5.7));
		
		BiFunction<Double, Double, String> resultado = (nota1, nota2) -> {
			double mediaFinal = media.apply(nota1, nota2);
			return mediaFinal >= 7 ? "Aprovado" : "Reprovado";
		};
		System.out.println(resultado.apply(9.8, 5.7));
		
		Function<Double, String> conceito = m -> m >= 7 ? "Aprovado" : "Reprovado";
		System.out.println(media.andThen(conceito).apply(9.7, 4.1));
	}
}
