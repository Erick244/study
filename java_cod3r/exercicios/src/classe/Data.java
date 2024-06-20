package classe;

public class Data {

	int dia;
	int mes;
	int ano;
	
	Data() {
		//dia = 1;
		//mes = 1;
		//ano = 1970;
		
		this(1, 1, 1970);
		
		// byte, short, int, long -> 0
		// float, double -> 0.0
		// boolean -> false
		// char -> '\u0000'
		
		// Objetos -> null
	}
	
	Data(int dia, int mes, int ano) {
		this.dia = dia;
		this.mes = mes;
		this.ano = ano;
	}
	
	
	String obterData() {
		final String formato = "%d/%d/%d";
		String dataFormatada = String.format(formato, dia, mes, ano);
		return dataFormatada;
	}
	
	
	
}
