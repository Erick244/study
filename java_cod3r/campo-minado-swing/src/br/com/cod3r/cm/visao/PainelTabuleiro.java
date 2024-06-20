package br.com.cod3r.cm.visao;

import java.awt.GridLayout;

import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;

import br.com.cod3r.cm.modelo.Tabuleiro;

@SuppressWarnings("serial")
public class PainelTabuleiro extends JPanel {

	public PainelTabuleiro(Tabuleiro tabuleiro) {
		setLayout(new GridLayout(tabuleiro.getLinhas(), tabuleiro.getColunas()));

		tabuleiro.paraCadaCampo(campo -> add(new BotaoCampo(campo)));

		tabuleiro.registrarObservador(evento -> {
			
			SwingUtilities.invokeLater(() -> {
				if (evento.isGanhou()) {
					JOptionPane.showMessageDialog(this, "Ganhou!");
				} else {
					JOptionPane.showMessageDialog(this, "Perdeu!");
				}		
				
				tabuleiro.reiniciar();
			});
			
		});
	}
}
