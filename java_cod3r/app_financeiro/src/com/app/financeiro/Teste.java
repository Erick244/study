package com.app.financeiro;

import java.util.ServiceLoader;

import com.app.app_api.Calculadora;

public class Teste {

	public static void main(String[] args) {
		
		Calculadora calc = ServiceLoader
					.load(Calculadora.class)
					.findFirst()
					.get();
	
		System.out.println(calc.soma(9, 2, 3, 4));
		
	}
}
