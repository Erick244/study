package arrays;

import java.util.Scanner;

public class DesafioArray {

	public static void main(String[] args) {

		Scanner entrada = new Scanner(System.in);

		System.out.print("Quantas notas deseja informar? ");
		int quantidadeDeNotas = entrada.nextInt();

		double[] notas = new double[quantidadeDeNotas];

		for (int i = 0; i < quantidadeDeNotas; i++) {
			System.out.printf("Dite a %d° nota: ", i + 1);
			double nota = entrada.nextDouble();
			
			notas[i] = nota;
		}

		double somaDasNotas = 0;
		for (double nota : notas) {
			somaDasNotas += nota;
		}

		double media = somaDasNotas / quantidadeDeNotas;
		System.out.printf("A media de %d notas é %.1f", quantidadeDeNotas, media);

		entrada.close();
	}
}
