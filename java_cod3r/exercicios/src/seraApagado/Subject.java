package seraApagado;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

public class Subject {

	private List<ObserverEvent> observers = new ArrayList<>();
	
	public void registerObserver(ObserverEvent observer) {
		observers.add(observer); 
	}
	
	public void monitor() {
		Scanner scanner = new Scanner(System.in);
		
		while(true) {
			System.out.println("Gerar evento?");
			String input = scanner.nextLine();
			
			if (input.equalsIgnoreCase("sim")) {
				Event event = new Event(new Date());
				
				for(ObserverEvent observer : observers) {
					observer.onEvent(event);
				}
				
				scanner.close();
				break;
			} else {
				System.out.println("Evento não disparado!");
			}
		}
	}
}
