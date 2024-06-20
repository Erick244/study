package oo.heranca.desafio;

public class Carro {

	public final int VOLOCIDADE_MAXIMA;
	public int velocidadeAtual;
	private int delta = 5;
	
	protected Carro(int velocidadeMaxima) {
		VOLOCIDADE_MAXIMA = velocidadeMaxima;
	}
	
	public void acelerar() {
		if (velocidadeAtual + getDelta() > VOLOCIDADE_MAXIMA) {
			velocidadeAtual = VOLOCIDADE_MAXIMA;
		} else {
			velocidadeAtual += getDelta();			
		}
	}
	
	public void frear() {
		if (velocidadeAtual >= 5) {
			velocidadeAtual -= 5;			
		}
	}

	public int getDelta() {
		return delta;
	}

	public void setDelta(int delta) {
		this.delta = delta;
	}
	
	
}
