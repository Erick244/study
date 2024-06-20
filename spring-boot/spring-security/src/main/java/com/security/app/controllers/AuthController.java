package com.security.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.security.app.models.dtos.LoginDto;
import com.security.app.models.dtos.LoginResponseDto;
import com.security.app.models.dtos.SignUpDto;
import com.security.app.models.entities.User;
import com.security.app.models.repositories.UserRepository;
import com.security.app.services.JwtService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtService jwtService;

	@PostMapping("/login")
	public ResponseEntity<LoginResponseDto> signIn(@RequestBody @Valid LoginDto loginDto) {
		var userLogin = new UsernamePasswordAuthenticationToken(loginDto.username(), loginDto.password());
		Authentication auth = this.authenticationManager.authenticate(userLogin);
		
		String token = this.jwtService.generateToken((User) auth.getPrincipal());

		
		return ResponseEntity.ok(new LoginResponseDto(token));
	}
	
	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody @Valid SignUpDto signUpDto) {
		Boolean alreadyExistsUser = this.repository.findByUsername(signUpDto.username()) != null;
		
		if (alreadyExistsUser) {
			return ResponseEntity.badRequest().body("Already exists User");
		}
		
		String passwordEncrypted = new BCryptPasswordEncoder().encode(signUpDto.password());
		
		User user = new User(signUpDto.username(), passwordEncrypted, signUpDto.age());
		this.repository.save(user);
		
		return ResponseEntity.ok().build();
	}
			
}
