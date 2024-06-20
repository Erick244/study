package test.onetomany;

import infra.DAO;
import model.basic.Product;
import model.onetomany.Request;
import model.onetomany.RequestItem;

public class NewRequest {

	public static void main(String[] args) {
		
		DAO<Object> dao = new DAO<>();
		
		Request request = new Request();
		Product product = new Product("Geladeira", 2789.99);
		RequestItem item = new RequestItem(request, product, 10);
		
		dao.openTransition()
			.include(product)
			.include(request)
			.include(item)
			.closeTransition()
			.closeEM();
	}
}
