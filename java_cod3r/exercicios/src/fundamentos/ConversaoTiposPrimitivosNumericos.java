package fundamentos;

public class ConversaoTiposPrimitivosNumericos {

	public static void main(String[] args) {
		
		double a = 1;
		System.out.println(a);
		
		float b = (float) 1.123456789; // Cast
		System.out.println(b);
		
		int c = 130;
		byte d = (byte) c; // 1, 2, 3, 4..., 127, -128, -127, -126...
		System.out.println(d);
		
		double e = 1;
		int f = (int) e;
		System.out.println(f);
	}
}
