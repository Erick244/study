package com.mongodb.springmongodb.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mongodb.springmongodb.models.documents.GroceryItem;
import com.mongodb.springmongodb.models.repositories.ItemRepository;

@RestController
@RequestMapping("/grocery-list")
public class GroceryListController {

	@Autowired
	private ItemRepository itemRepository;

	@GetMapping
	private List<GroceryItem> findAll() {
		return this.itemRepository.findAll();
	}

}
