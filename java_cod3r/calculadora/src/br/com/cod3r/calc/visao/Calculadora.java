package br.com.cod3r.calc.visao;

import java.awt.BorderLayout;
import java.awt.Dimension;

import javax.swing.JFrame;

@SuppressWarnings("serial")
public class Calculadora extends JFrame {

	private final int larguraDaTela = 300;
	private final int alturaDaTela = 400;

	public Calculadora() {
		
		organizarLayout();
		
		setSize(larguraDaTela, alturaDaTela);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setLocationRelativeTo(null);
		setVisible(true);
	}

	private void organizarLayout() {
		setLayout(new BorderLayout());

		int larguraDoDisplay = 233;
		int alturaDoDisplay = 70;
		Display display = new Display();

		Dimension dimensaoDoDisplay = new Dimension(larguraDoDisplay, alturaDoDisplay);
		display.setPreferredSize(dimensaoDoDisplay);
		add(display, BorderLayout.NORTH);

		Teclado teclado = new Teclado();
		add(teclado, BorderLayout.CENTER);
	}

	public static void main(String[] args) {
		new Calculadora();
	}
}
