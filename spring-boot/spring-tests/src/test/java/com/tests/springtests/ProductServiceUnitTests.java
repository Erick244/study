package com.tests.springtests;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class ProductServiceUnitTests {

	private ProductService productService;

	@BeforeEach
	public void setUp() {
		productService = new ProductService();
	}

	@Test
	public void testCalculateTotalPrice() {
		Product product1 = new Product(1, "Product 1", 10);
		Product product2 = new Product(2, "Product 2", 10);
		List<Product> products = Arrays.asList(product1, product2);

		Double total = productService.calculateTotalPrice(products);

		assertEquals(20.0, total);
	}
}