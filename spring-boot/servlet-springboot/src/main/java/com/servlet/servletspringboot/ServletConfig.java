package com.servlet.servletspringboot;

import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ServletConfig {

	@Bean
	public ServletRegistrationBean<CustomServlet> customServletBean() {
		return new ServletRegistrationBean<CustomServlet>(new CustomServlet(), "/servlet");
	}
}
