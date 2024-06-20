package com.crud.app.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.crud.app.model.entities.Product;
import com.crud.app.model.repositories.ProductRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/products")
public class ProductController {

	@Autowired
	private ProductRepository productRepository;

	@RequestMapping(method = { RequestMethod.POST, RequestMethod.PUT })
	public Product save(@Valid @RequestBody Product product) {
		productRepository.save(product);

		return product;
	}
	
	@GetMapping
	public Iterable<Product> findAll() {
		return productRepository.findAll();
	}
	
	@GetMapping(path = "/name")
	public Iterable<Product> findAllByName(@RequestParam String query) {
		return productRepository.findByNameIgnoreCase(query);
	}
	
	@GetMapping(path = "/paged")
	public Iterable<Product> findAllPaged(@RequestParam int page, @RequestParam int take) {
		Pageable pageable = PageRequest.of(page, take);
		return productRepository.findAll(pageable);
	}
	
	@GetMapping(path = "/{id}")
	public Optional<Product> findOne(@PathVariable Integer id) {
		return productRepository.findById(id);

	}
	
	@DeleteMapping(path = "/{id}")
	public void delete(@PathVariable Integer id) {
		productRepository.deleteById(id);
	}
	
	
}
