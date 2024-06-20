package com.servlet.servletspringboot;

import org.springframework.boot.web.servlet.ServletListenerRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import jakarta.servlet.ServletContextListener;

@Configuration
public class ListenerConfig {

	@Bean
	public ServletListenerRegistrationBean<ServletContextListener> customListenerBean() {
		ServletListenerRegistrationBean<ServletContextListener> bean = new ServletListenerRegistrationBean<>();
		bean.setListener(new CustomListener());

		return bean;
	}

}
