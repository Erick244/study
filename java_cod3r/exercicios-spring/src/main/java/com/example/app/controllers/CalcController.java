package com.example.app.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/calc")
public class CalcController {

	// d1 = /calc/sum/x/y
	@GetMapping("/sum/{x}/{y}")
	public Double sum(
		@PathVariable Double x,
		@PathVariable Double y)
	{
		return x + y;
	}

	// d2 = /calc/subtract?x=123&y=123
	@GetMapping("/subtract")
	public Double subtract(
		@RequestParam(name = "x") Double x,
		@RequestParam(name = "y") Double y
	) {
		return x - y;
	}

}
