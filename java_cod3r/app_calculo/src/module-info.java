import com.app.calculo.CalculadoraIMPL;

module app_calculo {
	
	exports com.app.calculo;
	requires transitive app_logging;
	
	exports com.app.calculo.interno to app_financeiro;
	
	requires app_api_publica;
	
	provides com.app.app_api.Calculadora with CalculadoraIMPL;
}