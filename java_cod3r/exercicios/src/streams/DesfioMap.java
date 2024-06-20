package streams;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;
import java.util.function.UnaryOperator;

public class DesfioMap {

	public static void main(String[] args) {
		
		List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9);
			
		UnaryOperator<String> inverterString = string -> new StringBuilder(string).reverse().toString();
		
		Function<String, Integer> converterParaInteiro = string -> Integer.parseInt(string, 2);
		
		numeros.stream()
			.map(Integer::toBinaryString)
			.map(inverterString)
			.map(converterParaInteiro)
			.forEach(System.out::println);
	}
}
