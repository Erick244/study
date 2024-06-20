package streams;

import java.util.function.UnaryOperator;

public class Utilitarios {

	private Utilitarios() {}

	public final static UnaryOperator<String> maiuscula = string -> string.toUpperCase();

	public final static UnaryOperator<String> primeiraLetra = string -> string.charAt(0) + "";

	public final static String grito(String string) {
		return string + "!!!";
	}
}
