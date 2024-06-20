package br.com.cod3r.cm.modelo;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import br.com.cod3r.cm.excecao.ExplosaoException;

public class Tabuleiro {

	private int linhas;
	private int colunas;
	private int minas;

	private final List<Campo> campos = new ArrayList<>();

	public Tabuleiro(int linhas, int colunas, int minas) {
		this.linhas = linhas;
		this.colunas = colunas;
		this.minas = minas;

		gerarCampos();
		associarVizinhos();
		sortearMinas();
	}

	public void abrir(int linha, int coluna) {
		try {
			campos.parallelStream()
				.filter(campo -> campo.getLinha() == linha && campo.getColuna() == coluna)
				.findFirst()
				.ifPresent(campo -> campo.abrir());
		} catch (ExplosaoException e) {
			campos.forEach(campo -> campo.setAberto(true));
			throw e;
		}
	}

	public void alternarMarcacao(int linha, int coluna) {
		campos.parallelStream().filter(campo -> campo.getLinha() == linha && campo.getColuna() == coluna).findFirst()
				.ifPresent(campo -> campo.alternarMarcacao());
	}

	private void gerarCampos() {
		for (int linha = 0; linha < linhas; linha++) {
			for (int coluna = 0; coluna < colunas; coluna++) {
				campos.add(new Campo(linha, coluna));
			}
		}
	}

	private void associarVizinhos() {
		for (Campo campo1 : campos) {
			for (Campo campo2 : campos) {
				campo1.adicionarVizinho(campo2);
			}
		}
	}

	private void sortearMinas() {
		long minasArmadas = 0;
		Predicate<Campo> minado = campo -> campo.isMinado();

		do {
			int aleatorio = (int) (Math.random() * campos.size());
			campos.get(aleatorio).minar();
			minasArmadas = campos.stream().filter(minado).count();
		}
		while (minasArmadas < minas);
	}

	public boolean objetivoAlcancado() {
		return campos.stream().allMatch(campo -> campo.objeivoAlcancado());
	}

	public void reiniciar() {
		campos.stream().forEach(campo -> campo.reiniciar());
		sortearMinas();
	}

	public String toString() {
		StringBuilder sb = new StringBuilder();
		
		sb.append("   ");
		for (int coluna = 0; coluna < colunas ; coluna++) {
			sb.append("_");
			sb.append(coluna);
			sb.append("_");
		}
		
		sb.append("\n");

		int i = 0;
		for (int linha = 0; linha < linhas; linha++) {
			sb.append(linha);
			sb.append(" |");

			for (int coluna = 0; coluna < colunas; coluna++) {
				sb.append(" ");
				sb.append(campos.get(i));
				sb.append(" ");
				i++;
			}
			sb.append("\n");
		}

		return sb.toString();
	}
}
