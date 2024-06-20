package padroes.observer;

public class AniversarioSurpresa {

	public static void main(String[] args) {
		Namorada namorada = new Namorada();
		Porteiro porteiro = new  Porteiro();
		
		porteiro.registraraObservador(namorada);
		porteiro.registraraObservador(evento -> System.out.println("Surpresa via lambda!" + evento.getMomento()));
		porteiro.monitorar();
	}
}
