package com.example.demo.model.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.entities.User;

@Service()
public class UserService {
	private List<User> users = new ArrayList<>();

	public void create(User user) {
		this.users.add(user);
	}

	public List<User> findAll() {
		return this.users;
	}
}
