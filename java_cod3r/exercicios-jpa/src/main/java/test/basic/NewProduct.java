package test.basic;

import infra.DAO;
import model.basic.Product;

public class NewProduct {

	public static void main(String[] args) {
		
		DAO<Product> dao = new DAO<>(Product.class);
		
		Product product = new Product("Monitor", 764.99);
		dao.atomicInlude(product).closeEM();
	}
}
