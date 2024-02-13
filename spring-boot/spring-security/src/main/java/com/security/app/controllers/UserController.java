package com.security.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.security.app.models.entities.User;
import com.security.app.models.repositories.UserRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserRepository repository;

	@GetMapping
	public ResponseEntity<Iterable<User>> findAll() {		
		return ResponseEntity.ok(repository.findAll());
	}
	
	@PostMapping
	public void createUser(@RequestBody @Valid User user) {
		this.repository.save(user);
	}
}
