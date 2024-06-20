package classe;

public class ValorVsReferencia {

	public static void main(String[] args) {
		
		int a = 2;
		int b = a; // atribuição por valor
		
		a++;
		b--;
		
		System.out.println("Valor 1: " + a);
		System.out.println("Valor 2: " + b);
		
		Data d1 = new Data(1, 6, 2022);
		Data d2 = d1; // atribuição por refência (objeto)
		
		d1.dia = 31;
		d2.mes = 12;

		
		voltarDataParaValorPadrao(d2);
		System.out.println("Valor1: " + d1.obterData());
		System.out.println("Valor2: " + d2.obterData());
		
		int c = 5;
		alterarPrimitivo(c);
		System.out.println("Fora do método " + c);
		
	}
	
	static void voltarDataParaValorPadrao(Data d) {
		d.dia = 1;
		d.mes = 1;
		d.ano = 1970;
	}
	
	static void alterarPrimitivo(int c) {
		c++;
		System.out.println("Dentro do método " + c);
	}
}
