package classe;

public class ProdutoTeste {

	public static void main(String[] args) {
		
		Produto p1 = new Produto("Notebook", 4356.98);
		
		var p2 = new Produto();
		p2.nome = "Caneta Preta";
		p2.preco = 1.50;
		
		Produto.desconto = 0.29;
		
		System.out.println(p1.nome + " " + p1.precoComDesconto());
		System.out.println(p2.nome + " " + p2.precoComDesconto());
		
		double precoFinal1 = p1.precoComDesconto();
		double precoFinal2 = p2.precoComDesconto();
		double mediaCarrinho = (precoFinal1 + precoFinal2) / 2;
		System.out.printf("Média do carrinho = R$%.2f", mediaCarrinho);
	}
}
