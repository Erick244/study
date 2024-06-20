package com.fullstackoauth2.server.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.authorizeHttpRequests(authorize -> authorize.anyRequest().authenticated())
				.exceptionHandling(exceptionHandling -> {
					exceptionHandling.authenticationEntryPoint(new OAuth2AuthenticationEntryPoint());
				})
				.oauth2Login(customizer -> {
					customizer.successHandler(new OAuth2LoginSuccessHandle());
				});

		return http.build();
	}
}
