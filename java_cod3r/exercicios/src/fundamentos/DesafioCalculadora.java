package fundamentos;

import java.util.Scanner;

public class DesafioCalculadora {

	public static void main(String[] args) {
		// Ler num1
		// Ler num2
		// + - * / %
	
		Scanner entrada = new Scanner(System.in);
		
		System.out.print("Digite um número: ");
		double num1 = entrada.nextDouble();
		
		System.out.print("Digite outro número: ");
		double num2 = entrada.nextDouble();
		
		System.out.print("Informe a operação: ");
		String operacao = entrada.next();
		
		
		// Lógica do professor
//		double resultado = "+".equals(operacao) ? num1 + num2 : 0;
//		resultado = "-".equals(operacao) ? num1 - num2 : resultado;
//		resultado = "*".equals(operacao) ? num1 * num2 : resultado;
//		resultado = "/".equals(operacao) ? num1 / num2 : resultado;
//		resultado = "%".equals(operacao) ? num1 % num2 : resultado;
		
		// Minha lógica
		double modulo =  operacao.equals("%") ? num1 % num2 : 0;
		double divisao = operacao.equals("/") ? num1 / num2 : modulo;
		double multiplicacao = operacao.equals("*") ? num1 * num2 : divisao;
		double subtracao = operacao.equals("-") ? num1 - num2 : multiplicacao;
		double resultado = operacao.equals("+") ? num1 + num2 : subtracao;
		
		System.out.printf("%.2f %s %.2f = %.2f", num1, operacao, num2, resultado);
		
		entrada.close();
	}
}
