package test.onetomany;

import infra.DAO;
import model.onetomany.Request;
import model.onetomany.RequestItem;

public class GetRequest {

	public static void main(String[] args) {
		
		DAO<Request> dao = new DAO<>(Request.class);
		
		Request request = dao.getById(1L);
		dao.closeEM();
		
		for(RequestItem item : request.getItems()) {
			System.out.println(item.getQuantity());
			System.out.println(item.getProduct().getName());
		}
		
	}
}
