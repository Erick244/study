package oo.composicao.desafio;

import java.util.ArrayList;

public class Compra {
	
	final ArrayList<Item> itens = new ArrayList<>();
	
	void adicionarItem(Produto produto, int quantidade) {
		Item item = new Item(produto, quantidade);
		this.itens.add(item);		
	}
	
	void adicionarItem(String nome, double preco, int quantidade) {
		Produto produto = new Produto(nome, preco);
		Item item = new Item(produto, quantidade);
		this.itens.add(item);		
	}
	
	double obterValorTotal() {
		double total = 0;
		for(Item item : itens) {
			double calculo = item.produto.preco * item.quantidade;
			total += calculo;
		}
		
		return total;
	}
}
