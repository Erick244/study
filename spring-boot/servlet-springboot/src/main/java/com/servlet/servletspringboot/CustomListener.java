package com.servlet.servletspringboot;

import jakarta.servlet.ServletContextEvent;
import jakarta.servlet.ServletContextListener;

public class CustomListener implements ServletContextListener {

	@Override
	public void contextInitialized(ServletContextEvent sce) {
		System.out.println("CustomListener is initialized");

		ServletContextListener.super.contextInitialized(sce);
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		System.out.println("CustomListener is destroyed");

		ServletContextListener.super.contextDestroyed(sce);
	}
}
