package streams;

public class Usuario {

	final String nome;
	final int idade;
	final boolean estaAtivo;
	
	public Usuario(String nome, int idade, boolean estaAtivo) {
		super();
		this.nome = nome;
		this.idade = idade;
		this.estaAtivo = estaAtivo;
	}
	
	@Override
	public String toString() {
		return this.nome;
	}

}
