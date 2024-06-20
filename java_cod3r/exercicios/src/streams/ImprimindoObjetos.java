package streams;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;
import java.util.Iterator;

public class ImprimindoObjetos {

	public static void main(String[] args) {

		List<String> aprovados = Arrays.asList("Lu", "Gui", "Luca", "Ana");
		
		System.out.println("Usando o foreach...");
		for (String nome : aprovados) {
			System.out.println(nome);
		}

		System.out.println("\nUsando o Iterator...");
		Iterator<String> iterator = aprovados.iterator();
		
		while(iterator.hasNext()) {
			System.out.println(iterator.next());
		}
		
		System.out.println("\nUsando o Stream...");
		Stream<String> stream = aprovados.stream();
		stream.forEach(System.out::println);
	}
}
