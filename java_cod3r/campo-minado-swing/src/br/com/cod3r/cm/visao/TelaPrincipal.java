package br.com.cod3r.cm.visao;

import javax.swing.JFrame;

import br.com.cod3r.cm.modelo.Tabuleiro;

@SuppressWarnings("serial")
public class TelaPrincipal extends JFrame {
	
	private final String titulo = "Campo Minado";
	private final int larguraTela = 690;
	private final int alturaTela = 438;
	private int linhas = 16;
	private int colunas = 39;
	private int minas = 5;

	public TelaPrincipal() {
		Tabuleiro tabuleiro = new Tabuleiro(linhas, colunas, minas);
		add(new PainelTabuleiro(tabuleiro));

		setTitle(titulo);
		setSize(larguraTela, alturaTela);
		setLocationRelativeTo(null);
		setDefaultCloseOperation(DISPOSE_ON_CLOSE);
		setVisible(true);
	}

	public static void main(String[] args) {
		new TelaPrincipal();
	}
}
