package fundamentos;

public class Inferencia {
	
	public static void main(String[] args) {
		
		double a = 4.5;
		System.out.println(a);
		
		a = 10;
		System.out.println(a);
		
		var b = 4.5;
		System.out.println(b);
		
		var c = "Texto";
		System.out.println(c);
		
		c = "Outro texto";
		System.out.println(c);
		
		double d; // variável foi declarada
		d = 123.45; // variável foi inicializada
		System.out.println(d); // usada!
		
//		var e; // não funciona com var
//		e = 123.45;
	}
}
