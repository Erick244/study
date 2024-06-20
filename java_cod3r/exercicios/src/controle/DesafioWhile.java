package controle;

import java.util.Scanner;

public class DesafioWhile {

	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
		
		double nota = 0;
		double total = 0;
		int quantidadeDeNotas = 0;
		
		while(nota != -1) {
			System.out.print("informe uma nota: ");
			nota = Double.parseDouble(entrada.next());
			
			if (nota <= 10 && nota >= 0) {
				total += nota;
				quantidadeDeNotas++;
			} else if (nota != -1) {
				System.out.printf("Nota \"%.1f\" inválida, ", nota);
			}
		}
		
		double media = total / quantidadeDeNotas;
		System.out.println("Média: " + media);

		entrada.close();
	}
}
