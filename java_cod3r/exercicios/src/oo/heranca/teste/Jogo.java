package oo.heranca.teste;

import oo.heranca.Direcao;
import oo.heranca.Heroi;
import oo.heranca.Monstro;

public class Jogo {

	public static void main(String[] args) {
		
		Monstro mostro = new Monstro();
		mostro.x = 10;
		mostro.y = 10;
		
		Heroi heroi = new Heroi(10, 11);
		
		System.out.println("Mostro tem -> " + mostro.vida);
		System.out.println("Heroi tem -> " + heroi.vida);
		
		mostro.atacar(heroi);
		mostro.atacar(heroi);
		heroi.atacar(mostro);
		heroi.atacar(mostro);
		
		heroi.andar(Direcao.OESTE);
		heroi.atacar(mostro);
		
		
		System.out.println("Mostro tem -> " + mostro.vida);
		System.out.println("Heroi tem -> " + heroi.vida);
		
	}
}