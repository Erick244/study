package com.tests.springtests;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
@TestPropertySource(locations = "classpath:application-tests.properties")
public class ProductControllerTests {
	@Autowired
	private MockMvc mvc;

	@Autowired
	private ProductRepository repository;

	private final MediaType mediaType = MediaType.APPLICATION_JSON;

	private final int PRODUCTS_SIZE = 5;

	@BeforeEach
	public void cleanDatabase() {
		this.repository.deleteAll();
	}

	@Test
	void testFindAll() throws Exception {
		seedDatabase(PRODUCTS_SIZE);

		ResultMatcher jsonContentIsNotEmpty = jsonPath("$").isNotEmpty();
		ResultMatcher jsonContentIsArray = jsonPath("$").isArray();
		ResultMatcher jsonContentHasAllItems = jsonPath("$", hasSize(PRODUCTS_SIZE));

		mvc.perform(get("/products")
				.contentType(mediaType))
				.andExpect(status().isOk())
				.andExpect(content().contentTypeCompatibleWith(mediaType))
				.andExpect(jsonContentIsNotEmpty)
				.andExpect(jsonContentIsArray)
				.andExpect(jsonContentHasAllItems);
	}

	private void seedDatabase(Integer size) {
		for (int i = 1; i <= size; i++) {
			int id = i;
			String name = "Product " + i;
			double price = i + size;

			Product product = new Product(id, name, price);

			this.repository.save(product);
		}
	}

	@Test
	void testFindByName() throws Exception {
		seedDatabase(PRODUCTS_SIZE);

		Product productExpect = this.repository.findByName("Product 1");

		ResultMatcher jsonContentIsNotEmpty = jsonPath("$").isNotEmpty();
		ResultMatcher jsonContentHasSameId = jsonPath("$.id", is(productExpect.getId()));
		ResultMatcher jsonContentHasSameName = jsonPath("$.name", is(productExpect.getName()));
		ResultMatcher jsonContentHasSamePrice = jsonPath("$.price", is(productExpect.getPrice()));

		mvc.perform(get("/products/{name}", productExpect.getName())
				.contentType(mediaType))
				.andExpect(status().isOk())
				.andExpect(content().contentTypeCompatibleWith(mediaType))
				.andExpect(jsonContentIsNotEmpty)
				.andExpect(jsonContentHasSameId)
				.andExpect(jsonContentHasSameName)
				.andExpect(jsonContentHasSamePrice);
	}

	@Test
	void testSave() throws Exception {
		Product newProduct = new Product(0, "Test Product", 0.0);
		ObjectMapper mapper = new ObjectMapper();
		String responseBody = mapper.writeValueAsString(newProduct);

		ResultMatcher jsonContentIsNotEmpty = jsonPath("$").isNotEmpty();
		ResultMatcher jsonContentHasSameId = jsonPath("$.id", is(newProduct.getId()));
		ResultMatcher jsonContentHasSameName = jsonPath("$.name", is(newProduct.getName()));
		ResultMatcher jsonContentHasSamePrice = jsonPath("$.price", is(newProduct.getPrice()));

		mvc.perform(post("/products")
				.content(responseBody)
				.contentType(mediaType))
				.andExpect(status().isOk())
				.andExpect(content().contentTypeCompatibleWith(mediaType))
				.andExpect(jsonContentIsNotEmpty)
				.andExpect(jsonContentHasSameId)
				.andExpect(jsonContentHasSameName)
				.andExpect(jsonContentHasSamePrice);
	}

}
