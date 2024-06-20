package test.heritage;

import infra.DAO;
import model.heritage.Dog;
import model.heritage.Horse;

public class NewAnimal {
	
	public static void main(String[] args) {
		
		DAO<Object> dao = new DAO<>();

		Dog dog = new Dog("Bile", "Vira Lata");
		Horse horse = new Horse("thor", "Marrom");

		dao.openTransition()
			.include(dog)
			.include(horse)
			.closeTransition()
			.closeEM();
	}
}
