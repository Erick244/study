package test.onetoone;

import infra.DAO;
import model.onetoone.Client;
import model.onetoone.Seat;

public class NewClientSeat1 {

	public static void main(String[] args) {
		
		Seat seat = new Seat("23F");
		Client client = new Client("Bia", seat);
		
		DAO<Object> dao = new DAO<>();
		
		dao.openTransition()
			.include(seat)
			.include(client)
			.closeTransition()
			.closeEM();
	}
}
