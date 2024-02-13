package com.tests.springtests;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;

	public Double getTotalPrice() {
		List<Product> products = productRepository.findAll();
		return calculateTotalPrice(products);
	}

	public Double calculateTotalPrice(List<Product> products) {
		Double total = products.stream().reduce(0.0, (acumulator, product) -> acumulator + product.getPrice(),
				Double::sum);
		return total;
	}
}
