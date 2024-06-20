package test.manytomany;

import infra.DAO;
import model.manytomany.Nephew;
import model.manytomany.Uncle;

public class NewUncleNephew {
	
	public static void main(String[] args) {
		
		Uncle uncle1 = new Uncle("Maria");
		Uncle uncle2 = new Uncle("João");

		Nephew nephew1 = new Nephew("Junior");
		Nephew nephew2 = new Nephew("Ana");

		uncle1.getNephews().add(nephew1);
		nephew1.getUncles().add(uncle1);

		uncle1.getNephews().add(nephew2);
		nephew2.getUncles().add(uncle1);

		uncle2.getNephews().add(nephew1);
		nephew1.getUncles().add(uncle2);

		uncle2.getNephews().add(nephew2);
		nephew2.getUncles().add(uncle2);

		DAO<Object> dao = new DAO<>();
		dao.openTransition()
			.include(uncle1)
			.include(uncle2)
			.include(nephew1)
			.include(nephew2)
			.closeTransition()
			.closeEM();
	}
}
