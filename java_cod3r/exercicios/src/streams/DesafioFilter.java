package streams;

import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

public class DesafioFilter {

	public static void main(String[] args) {
		
		Usuario user1 = new Usuario("Erick", 17, true);
		Usuario user2 = new Usuario("Luis", 27, false);
		Usuario user3 = new Usuario("Carlos", 7, false);
		Usuario user4 = new Usuario("Ana", 19, true);
		Usuario user5 = new Usuario("Julia", 16, false);
		
		List<Usuario> usuarios = Arrays.asList(user1, user2, user3, user4, user5);
		
		Predicate<Usuario> ehMaiorDeIdade = user -> user.idade >= 18;
		Predicate<Usuario> estaAtivo = user -> user.estaAtivo;
		
		usuarios.stream()
			.filter(ehMaiorDeIdade)
			.filter(estaAtivo)
			.forEach(System.out::println);
	}
}
