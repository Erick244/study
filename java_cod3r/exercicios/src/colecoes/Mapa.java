package colecoes;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

public class Mapa {

	public static void main(String[] args) {
		
		Map<Integer, String> usuarios = new HashMap<>();
		
		usuarios.put(1, "Roberto");
		usuarios.put(1, "Ricardo");
		usuarios.put(2, "Lucas");
		usuarios.put(3, "Ana");

//		System.out.println(usuarios.keySet());
//		System.out.println(usuarios.values());
//		System.out.println(usuarios.entrySet());
//		
//		System.out.println(usuarios.containsKey(3));
//		System.out.println(usuarios.containsValue("Rebeca"));
//		
//		System.out.println(usuarios.get(1));

//		for(int chave : usuarios.keySet()) {
//			System.out.println(chave);
//		}
//		
//		for(String valor : usuarios.values()) {
//			System.out.println(valor);
//		}
		
		for(Entry<Integer, String> usuario : usuarios.entrySet()) {
			System.out.println(usuario.getKey());
			System.out.println(usuario.getValue());
		}
		
		System.out.println(usuarios.remove(1));
	}
}
