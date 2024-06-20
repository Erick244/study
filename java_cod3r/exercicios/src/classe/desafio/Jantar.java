package classe.desafio;

public class Jantar {

	public static void main(String[] args) {
		Comida c = new Comida("Hamburguer", 0.650);

		Pessoa p = new Pessoa("Pedro", 85.9);
		System.out.printf("%s tinha %.2fKg", p.nome, p.peso);

		p.comer(c);
		p.comer(c);

		System.out.printf("\n%s comeu dois %s e agora tem %.2fKg", p.nome, c.nome, p.peso);
	}
}
