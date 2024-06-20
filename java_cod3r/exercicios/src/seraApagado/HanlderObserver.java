package seraApagado;

public class HanlderObserver {

	public static void main(String[] args) {
		
		Subject subject = new Subject();
		
		subject.registerObserver(event -> {
			System.out.println("Evento gerado em " + event.getEventMoment());
		});
		
		subject.monitor();
	}
}
