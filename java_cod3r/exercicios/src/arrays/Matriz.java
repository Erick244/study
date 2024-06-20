package arrays;

import java.util.Scanner;

public class Matriz {

	public static void main(String[] args) {

		Scanner entrada = new Scanner(System.in);

		System.out.print("Informe a quantidade de alunos: ");
		int quantidadeDeAlunos = entrada.nextInt();

		System.out.print("Quantas notas cada aluno possui: ");
		int quantidadeDeNotas = entrada.nextInt();

		double[][] notasDaTurma = new double[quantidadeDeAlunos][quantidadeDeNotas];

		double somaDasNotas = 0;
		for (int i = 0; i < quantidadeDeAlunos; i++) {
			double[] notasDoAluno = new double[quantidadeDeNotas];

			for (int j = 0; j < quantidadeDeNotas; j++) {
				System.out.printf("Informe a %d° nota do %d° aluno: ", j + 1, i + 1);

				double nota = entrada.nextDouble();
				notasDoAluno[j] = nota;
				
				somaDasNotas += nota;
			}

			notasDaTurma[i] = notasDoAluno;
		}
		
		double media = somaDasNotas / (quantidadeDeAlunos * quantidadeDeNotas);
		System.out.println("A média da turma é: " + media);

		entrada.close();
	}
}
