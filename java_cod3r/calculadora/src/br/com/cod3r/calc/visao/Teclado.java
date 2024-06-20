package br.com.cod3r.calc.visao;

import java.awt.Color;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JPanel;

import br.com.cod3r.calc.modelo.Memoria;

@SuppressWarnings("serial")
public class Teclado extends JPanel implements ActionListener {

	private final Color COR_CINZA_ESCURO = new Color(68, 68, 68);
	private final Color COR_CINZA_CLARO = new Color(99, 99, 99);
	private final Color COR_LARANJA = new Color(242, 163, 60);

	public Teclado() {

		GridBagLayout layout = new GridBagLayout();
		GridBagConstraints c = new GridBagConstraints();

		setLayout(layout);
		
		c.weightx = 1;
		c.weighty = 1;
		c.fill = GridBagConstraints.BOTH;

		// Linha 1
		c.gridwidth = 2;
		adidcionarBotao("AC", COR_CINZA_ESCURO, c, 0, 0);
		c.gridwidth = 1;
		adidcionarBotao("+/-", COR_CINZA_ESCURO, c, 2, 0);
		adidcionarBotao("/", COR_LARANJA, c, 3, 0);

		// Linha 2
		adidcionarBotao("7", COR_CINZA_CLARO, c, 0, 1);
		adidcionarBotao("8", COR_CINZA_CLARO, c, 1, 1);
		adidcionarBotao("9", COR_CINZA_CLARO, c, 2, 1);
		adidcionarBotao("*", COR_LARANJA, c, 3, 1);

		// Linha 3
		adidcionarBotao("4", COR_CINZA_CLARO, c, 0, 2);
		adidcionarBotao("5", COR_CINZA_CLARO, c, 1, 2);
		adidcionarBotao("6", COR_CINZA_CLARO, c, 2, 2);
		adidcionarBotao("-", COR_LARANJA, c, 3, 2);

		// Linha 4
		adidcionarBotao("1", COR_CINZA_CLARO, c, 0, 3);
		adidcionarBotao("2", COR_CINZA_CLARO, c, 1, 3);
		adidcionarBotao("3", COR_CINZA_CLARO, c, 2, 3);
		adidcionarBotao("+", COR_LARANJA, c, 3, 3);

		// Linha 5
		c.gridwidth = 2;
		adidcionarBotao("0", COR_CINZA_CLARO, c, 0, 4);
		c.gridwidth = 1;
		adidcionarBotao(",", COR_CINZA_CLARO, c, 2, 4);
		adidcionarBotao("=", COR_LARANJA, c, 3, 4);
	}

	private void adidcionarBotao(String texto, Color cor, GridBagConstraints c, int x, int y) {
		c.gridx = x;
		c.gridy = y;
		Botao botao = new Botao(texto, cor);
		botao.addActionListener(this);
		add(botao, c);
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() instanceof JButton) {
			JButton botao = (JButton) e.getSource();			
			Memoria.getInstancia().processarComando(botao.getText());
		}
	}
}
