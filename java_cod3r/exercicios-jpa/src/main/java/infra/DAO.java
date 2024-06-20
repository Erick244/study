package infra;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

public class DAO<E> {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Class<E> entity;

	static {
		try {
			emf = Persistence.createEntityManagerFactory("exercicios-jpa");
		} catch (Exception e) {
			// ...
		}
	}

	public DAO() {
		this(null);
	}

	public DAO(Class<E> entity) {
		em = emf.createEntityManager();
		this.entity = entity;
	}

	public E getById(Object id) {
		return em.find(entity, id);
	}

	public DAO<E> openTransition() {
		em.getTransaction().begin();
		return this;
	}

	public DAO<E> closeTransition() {
		em.getTransaction().commit();
		return this;
	}

	public DAO<E> include(E entity) {
		em.persist(entity);
		return this;
	}

	public DAO<E> atomicInlude(E entity) {
		return this.openTransition()
				.include(entity)
				.closeTransition();
	}

	public List<E> findAll() {
		return this.findAll(10, 0);
	}

	public List<E> findAll(int limit, int offset) {
		if (entity == null) {
			throw new UnsupportedOperationException("Entity is null.");
		}

		final String FIND_ALL_JPQL = "SELECT entity FROM " + entity.getName() + " entity";
		TypedQuery<E> query = em.createQuery(FIND_ALL_JPQL, entity);
		query.setMaxResults(limit);
		query.setFirstResult(offset);

		return query.getResultList();
	}

	public List<E> querie(String queryName, Object... values) {
		TypedQuery<E> query = em.createNamedQuery(queryName, entity);

		for (int i = 0; i < values.length; i += 2) {
			query.setParameter(values[i].toString(), values[i + 1]);
		}

		return query.getResultList();
	}

	public E querieOne(String queryName, Object... values) {
		List<E> entityes = querie(queryName, values);
		return entityes.isEmpty() ? null : entityes.get(0);
	}

	public void closeEM() {
		em.close();
	}
}
