package lambda;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class Consumidor {

	public static void main(String[] args) {

		Consumer<Produto> imprimirNome = produto -> System.out.println(produto.nome);

		Produto produto1 = new Produto("Mouse", 159, 0.05);
		imprimirNome.accept(produto1);

		Produto produto2 = new Produto("Teclado", 259, 0.15);
		Produto produto3 = new Produto("Monitor", 1579, 0.05);
		Produto produto4 = new Produto("Mousepad", 89, 0.25);
		Produto produto5 = new Produto("Headset", 239, 0.30);

		List<Produto> produtos = Arrays.asList(produto1, produto2, produto3, produto4, produto5);
		
		produtos.forEach(imprimirNome);
//		produtos.forEach(p -> imprimirNome.accept(p));
		produtos.forEach(System.out::println);
	}
}
