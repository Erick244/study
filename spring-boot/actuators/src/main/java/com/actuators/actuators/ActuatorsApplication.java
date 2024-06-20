package com.actuators.actuators;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@SpringBootApplication
public class ActuatorsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ActuatorsApplication.class, args);
	}

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.authorizeHttpRequests(a -> a
				.requestMatchers("/actuator/**")
				.permitAll()
				.anyRequest()
				.authenticated());

		return http.build();
	}

}
