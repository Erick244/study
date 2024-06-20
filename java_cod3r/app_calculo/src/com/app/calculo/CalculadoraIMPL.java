package com.app.calculo;

import com.app.app_api.Calculadora;
import com.app.calculo.interno.Operacoes;
import com.app.logging.Logger;

public class CalculadoraIMPL implements Calculadora {

	Operacoes operacoes = new Operacoes();

	public double soma(double... nums) {
		Logger.info("Somando...");
		return operacoes.soma(nums);
	}

}
