package streams;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class Map {

	public static void main(String[] args) {
		
		Consumer<String> print = System.out::print;
				
		List<String> marcas = Arrays.asList("BMW ", "Audi ", "Honda ");
		
//		marcas.stream().map(marca -> marca.toUpperCase()).forEach(print);
		
		
		
		marcas.stream()
			.map(Utilitarios.maiuscula)
			.map(Utilitarios.primeiraLetra)
			.map(Utilitarios::grito)
			.forEach(print);
	}
}
