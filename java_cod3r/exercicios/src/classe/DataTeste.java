package classe;

public class DataTeste {

	public static void main(String[] args) {
		
		Data data1 = new Data();
		data1.mes = 2;
		
		System.out.println(data1.obterData());
		
		Data data2 = new Data(2, 4, 1500);
		
		System.out.println(data2.obterData());
		
	}
}
