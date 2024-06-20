package com.fullstackoauth2.server;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstackoauth2.server.models.AppUser;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@GetMapping("/me")
	public ResponseEntity<AppUser> googleUser() {
		AppUser user = (AppUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return ResponseEntity.ok(user);
	}
}
