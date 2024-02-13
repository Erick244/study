package com.tests.springtests;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

@DataJpaTest
public class ProductRepositoryTests {

	@Autowired
	private TestEntityManager entityManager;

	@Autowired
	private ProductRepository repository;

	@Test
	void testFindByName() {
		Product productTest = new Product(0, "Product", 123);
		entityManager.persist(productTest);
		entityManager.flush();

		Product productFound = repository.findByName(productTest.getName());

		assertNotNull(productFound);
		assertEquals(productTest, productFound);
	}
}
