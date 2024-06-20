package com.eureka.gallery.eurekagallery;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/")
public class GalleryController {

	@Autowired
	private RestTemplate restTemplate;

	@Autowired
	private Environment env;

	@GetMapping
	public String home() {
		// This is useful for debugging
		// When having multiple instance of gallery service running at different ports.
		// We load balance among them, and display which instance received the request.
		return "Hello from Gallery Service running at port: " + env.getProperty("local.server.port");
	}

	@GetMapping("/{id}")
	public Gallery getGallery(@PathVariable int id) {
		Gallery gallery = new Gallery();
		gallery.setId(id);

		List<Object> images = restTemplate.getForObject("http://image-service/images", List.class);
		gallery.setImages(images);

		return gallery;
	}
}
