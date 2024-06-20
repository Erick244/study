package test.onetoone;

import infra.DAO;
import model.onetoone.Client;
import model.onetoone.Seat;

public class NewClientSeat2 {

	public static void main(String[] args) {
		
		Seat seat = new Seat("4D");
		Client client = new Client("Rodrigo", seat);
		
		DAO<Client> dao = new DAO<>();
		dao.atomicInlude(client);
	}
}
