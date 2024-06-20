package oo.heranca.desafio;

public class GTR extends Carro implements Esportivo, Luxo {

	private boolean ligarTurbo;
	private boolean ligarAr;
	
	public GTR() {
		this(300);
	}
	
	public GTR(int velocidadeMaxima) {
		super(velocidadeMaxima);
		setDelta(15);
	}
	
	@Override
	public void desligarTurbo() {
		ligarTurbo = true;
	}
	
	@Override
	public void ligarTurbo() {
		ligarTurbo = false;
	}
	
	@Override
	public void desligarAr() {
		ligarAr = true;
	}
	
	@Override
	public void ligarAr() {
		ligarAr = false;
	}
	
	@Override
	public int getDelta() {
		if(ligarTurbo && !ligarAr) {
			return 35;
		} else if (ligarTurbo && ligarAr) {
			return 30;
		} else if (!ligarTurbo && !ligarAr) {
			return 20;
		} else {
			return 15;			
		}
	}
}
