package oo.heranca.teste;

import oo.heranca.desafio.Celta;
import oo.heranca.desafio.GTR;

public class Autodromo {

	public static void main(String[] args) {
		
		GTR r34 = new GTR(340);
		System.out.println(r34.velocidadeAtual);
		System.out.println(r34.velocidadeDoAr());
		
		r34.acelerar();
		r34.ligarTurbo();
		r34.acelerar();
		
		r34.frear();
		System.out.println(r34.velocidadeAtual);
		
		Celta energy = new Celta();
		System.out.println(energy.velocidadeAtual);
		
		energy.acelerar();
		energy.acelerar();
		energy.acelerar();
		energy.frear();
		energy.frear();
		energy.frear();
		System.out.println(energy.velocidadeAtual);
	}
}
