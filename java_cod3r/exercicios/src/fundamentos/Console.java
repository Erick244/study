package fundamentos;

import java.util.Scanner;

public class Console {

	public static void main(String[] args) {

		System.out.print("Bom");
		System.out.print(" dia!\n\n");

		System.out.println("Bom");
		System.out.println("dia!");

		System.out.printf("Megasena: %d %d %d %d %d %d %n", 1, 2, 3, 4, 5, 6);
		System.out.printf("Salário: %.1f%n", 1234.5678);
		System.out.printf("Nome: %s%n", "João");

		Scanner entrada = new Scanner(System.in);

		System.out.println("Digite o seu nome: ");
		String nome = entrada.nextLine();

		System.out.println("Digite o seu sobrenome: ");
		String sobrenome = entrada.nextLine();
		
		System.out.println("Digite a sua idade: ");
		int idade = entrada.nextInt();
		
		System.out.println("Digite o seu salário: ");
		double salario = entrada.nextDouble();

		System.out.printf("\n\n%s %s tem %d anos e ganha R$%.2f.", nome, sobrenome, idade, salario);
		
		entrada.close();
	}
}
