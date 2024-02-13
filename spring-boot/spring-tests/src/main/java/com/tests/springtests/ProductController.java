package com.tests.springtests;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {

	@Autowired
	private ProductRepository productRepository;

	@GetMapping
	public Iterable<Product> findAll() {
		return productRepository.findAll();
	}

	@GetMapping("/{name}")
	public Product findByName(@PathVariable String name) {
		return productRepository.findByName(name);
	}

	@PostMapping
	public Product save(@RequestBody Product product) {
		return productRepository.save(product);
	}
}
