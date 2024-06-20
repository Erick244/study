package oo.heranca;

public class Monstro extends Jogador {
	
	public Monstro() {
		this(0, 0);
	}
	
	public Monstro(int x, int y) {
		super(x, y);
	}

	public boolean atacar(Jogador oponente) {
		boolean ataque1 = super.atacar(oponente);
		boolean ataque2 = super.atacar(oponente);
		return ataque1 || ataque2;
	}
}
