package com.security.app.models.repositories;

import org.springframework.data.repository.CrudRepository;

import com.security.app.models.entities.User;

public interface UserRepository extends CrudRepository<User, Long> {

	User findByUsername(String username);
}
