package lambda;

public class CalculoTeste2 {

	public static void main(String[] args) {
		
		Calculo calculo = (a, b) -> {
			return a + b;
		};
		
		System.out.println(calculo.executar(2, 3));
		
		calculo = (a, b) -> a * b;
	}
}
