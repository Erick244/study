package test.basic;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import model.basic.User;

public class UpdateUser3 {
 
	public static void main(String[] args) {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("exercicios-jpa");
		EntityManager em = emf.createEntityManager();
		
		User user = em.find(User.class, 1L);
		em.detach(user);

		user.setEmail("erick@dev.com");
		
		em.getTransaction().begin();
		em.merge(user);
		em.getTransaction().commit();
		
		emf.close();
		em.close();
	}
}
