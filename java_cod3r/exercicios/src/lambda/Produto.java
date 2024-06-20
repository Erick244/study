package lambda;

public class Produto {

	final String nome;
	final double preco;
	final double desconto;

	public Produto(String nome, double preco, double desconto) {
		this.nome = nome;
		this.preco = preco;
		this.desconto = desconto;
	}

	@Override
	public String toString() {
		double precoComDesconto = preco * (1 - desconto);
		String stringFormatada = String.format(
				"%s custa R$%.2f com o desocnto de %.2f", nome, precoComDesconto, desconto);
		return stringFormatada;
	}

}
