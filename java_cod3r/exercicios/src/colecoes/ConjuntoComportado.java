package colecoes;

import java.util.SortedSet;
import java.util.TreeSet;

public class ConjuntoComportado {

	public static void main(String[] args) {
		
//		Set<String> listaAprovados = new HashSet<>();
		SortedSet<String> listaAprovados = new TreeSet<>();
		listaAprovados.add("Ana");
		listaAprovados.add("Luca");
		listaAprovados.add("Carlos");
		listaAprovados.add("Pedro");
		
		System.out.println(listaAprovados);
		
		for (String candidato : listaAprovados) {
			System.out.println(candidato);
		}
	}
}
