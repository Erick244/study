package com.example.app.controllers;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/methods")
public class HTTPMethodsController {

	@GetMapping
	public String get() {
		return "GET Request";
	}
	
	@PostMapping
	public String post() {
		return "POST Request";
	}
	
	@PutMapping
	public String put() {
		return "PUT Request";
	}
	
	@PatchMapping
	public String patch() {
		return "PATCH request";
	}
	
	@DeleteMapping
	public String delete() {
		return "DELETE Request";
	}
}
