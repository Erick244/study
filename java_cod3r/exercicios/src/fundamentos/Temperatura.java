package fundamentos;

public class Temperatura {

	public static void main(String[] args) {
		// (F - 32) * 5/9.0 = C
		final int AJUSTE = 32;
		final double FATOR = 5 / 9.0;
		
		int fahrenheit = 86;
		double celsius = (fahrenheit - AJUSTE) * FATOR;
		System.out.println("O resultado é " + celsius + "ºC.");
		
		fahrenheit = 150;
		celsius = (fahrenheit - AJUSTE) * FATOR;
		System.out.println("O resultado é " + celsius + "ºC.");
		

	}
}
