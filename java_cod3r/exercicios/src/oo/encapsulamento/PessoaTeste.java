package oo.encapsulamento;

public class PessoaTeste {

	public static void main(String[] args) {
		
		Pessoa p1 = new Pessoa("Paulo", 30);
		p1.setIdade(-50); // alterar
		
		System.out.println(p1.getIdade()); // ler
	}
}
