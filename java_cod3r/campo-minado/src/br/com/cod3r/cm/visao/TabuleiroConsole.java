package br.com.cod3r.cm.visao;

import java.util.Arrays;
import java.util.Iterator;
import java.util.Scanner;

import br.com.cod3r.cm.excecao.ExplosaoException;
import br.com.cod3r.cm.excecao.SairException;
import br.com.cod3r.cm.modelo.Tabuleiro;

public class TabuleiroConsole {

	private Tabuleiro tabuleiro;
	private Scanner entrada = new Scanner(System.in);

	public TabuleiroConsole(Tabuleiro tabuleiro) {
		this.tabuleiro = tabuleiro;
		
		executarJogo();
	}

	private void executarJogo() {
		try {
			boolean continuar = true;
			
			while(continuar) {
				cicloDoJogo();
				
				System.out.println("Outra partida? (S/n) ");
				String resposta = entrada.nextLine();
				
				if (resposta.equalsIgnoreCase("n")) {
					continuar = false;
				} else {
					tabuleiro.reiniciar();
				}
			}
			
		} catch (SairException e) {
			System.out.println("Tchau!!!");
		} finally {
			entrada.close();
		}
	}

	private void cicloDoJogo() {
		try {
			
			while(!tabuleiro.objetivoAlcancado()) {
				System.out.println(tabuleiro);
				
				String[] posicoesEntrada = capturarValorDeEntrada("Digite (x, y): ").split(",");
				
				Iterator<Integer> posicoesXY = Arrays.stream(posicoesEntrada)
					.map(posicao -> Integer.parseInt(posicao.trim()))
					.iterator();
				
				String acao = capturarValorDeEntrada("1 - Abrir | 2 - Marcar: ");
				if (acao.equals("1")) {
					tabuleiro.abrir(posicoesXY.next(), posicoesXY.next());
				} else if (acao.equals("2")) {
					tabuleiro.alternarMarcacao(posicoesXY.next(), posicoesXY.next());
				}
				
			}
			
			System.out.println(tabuleiro);
			System.out.println("PARABÉNS!!!");
		} catch (ExplosaoException e) {
			System.out.println(tabuleiro);
			System.out.println("BOOOM!!!");
		}
	}
	
	private String capturarValorDeEntrada(String texto) {
		System.out.print(texto);
		String valorDeEntrada = entrada.nextLine();
		
		if (valorDeEntrada.equalsIgnoreCase("sair")) {
			throw new SairException();
		}
		
		return valorDeEntrada;
	}
	
}
