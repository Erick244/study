package com.example.app.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FirstController {
	
	@GetMapping(path = {"/hello", "/hi"})
	public String hello() {
		return "<h1>Hello Spring Boot!</h1>";
	}
}
