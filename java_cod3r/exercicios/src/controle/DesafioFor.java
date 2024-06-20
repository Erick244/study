package controle;

public class DesafioFor {

	public static void main(String[] args) {
		
		// Desafio for
		// Não pode usar valor numerico!
		for(String valor = "#"; !valor.equals("######"); valor += "#") {
			System.out.println(valor);
		}
	}
}