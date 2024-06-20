package com.example.app.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.model.entities.Client;

@RestController
@RequestMapping("/clients")
public class ClientController {

	@GetMapping("/findOne")
	public Client findOne() {
		return new Client(1, "Erick", 18);
	}
	
	@GetMapping("/{id}")
	public Client getClientById(@PathVariable int id) {
		return new Client(id, "Ana", 19);
	}
	
	@GetMapping
	public Client getClientById2(
		@RequestParam(name = "id", defaultValue = "1") int id,
		@RequestParam(name = "name") String name,
		@RequestParam(name = "age") int age
	) {
		return new Client(id, name, age);
	}
}
