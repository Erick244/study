package com.mongodb.springmongodb.models.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.mongodb.springmongodb.models.documents.GroceryItem;

@Repository
public interface ItemRepository extends MongoRepository<GroceryItem, String> {

	GroceryItem findByName(String name);

	@Query(value = "{category: '?0'}", fields = "{'name': 1, 'quantity': 1}")
	List<GroceryItem> findAllByCategory(String category);
}
