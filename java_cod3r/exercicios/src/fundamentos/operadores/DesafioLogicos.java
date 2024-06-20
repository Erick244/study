package fundamentos.operadores;

public class DesafioLogicos {

	public static void main(String[] args) {
		//Trabalho na terça (t ou f)
		//Trabalho na quinta (t ou f)
		
		boolean trabalho1 = true;
		boolean trabalho2 = false;
		
		boolean comprouTV50 = trabalho1 && trabalho2;
		System.out.println("Comprou TV 50\"? " + comprouTV50);
		
		boolean comprouTV32 = trabalho1 ^ trabalho2;
		System.out.println("Comprou TV 32\"? " + comprouTV32);
		
		boolean tomouSorvete = comprouTV50 || comprouTV32;
		System.out.println("Tomou sorvete? " + tomouSorvete);
		
		boolean ficouSaudavel = !tomouSorvete;
		System.out.println("Ficou saldável? " + ficouSaudavel);
		
		
	}
}
