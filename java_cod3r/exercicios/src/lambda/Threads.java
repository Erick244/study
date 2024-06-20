package lambda;

public class Threads {

	public static void main(String[] args) {
		
		Trabalho trabalho1 = new Trabalho();
		Runnable trabalho2 = new Runnable() {
			
			@Override
			public void run() {
				for (int i = 0; i < 100; i++) {
					System.out.println("Trabalho #02");
				}
			}
		};
		
		Runnable trabalho3 = Threads::trabalho3;
		
		Thread t1 = new Thread(trabalho1);
		Thread t2 = new Thread(trabalho2);
		Thread t3 = new Thread(trabalho3);
		
		t1.start();
		t2.start();
		t3.start();
	}
	
	static void trabalho3() {
		for (int i = 0; i < 100; i++) {
			System.out.println("Trabalho #03");
		}
	}
}
