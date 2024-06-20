package oo.composicao.desafio;

public class Sistema {

	public static void main(String[] args) {
		
		Produto caneta = new Produto("Caneta", 1.50);
		Produto caderno = new Produto("Caderno", 20.00);
	
		Compra compra1 = new Compra();
		compra1.adicionarItem(caneta, 3);
		compra1.adicionarItem("Corretivo", 5.00, 1);
		
		Item item = new Item(caderno, 5);
		compra1.itens.add(item);
		
		Compra compra2 = new Compra();
		compra2.adicionarItem("Mouse", 150.00, 1);
		compra2.adicionarItem("Monitor", 1500.00, 2);
		
		Cliente cliente = new Cliente("Pedro");
		cliente.adicionarCompra(compra1);
		cliente.compras.add(compra2);
		
		double valorTotal = cliente.obterValorTotal();
		System.out.println("O valor total da compra foi R$" + valorTotal);
		
	}
}
