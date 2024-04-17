package com.danielrrapi.coffeeroastersbackend.services;

import com.danielrrapi.coffeeroastersbackend.entities.User;
import com.danielrrapi.coffeeroastersbackend.exceptions.NotFoundException;
import com.danielrrapi.coffeeroastersbackend.repositories.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService {

    @Autowired
    private UserDAO userDAO;

    public User findById(String id) {
        return userDAO.findById(UUID.fromString(id)).orElseThrow(() -> new NotFoundException("User with id: " + id + "not found"));
    }

    public User findById(UUID id) {
        return userDAO.findById(id).orElseThrow(() -> new NotFoundException("User with id: " + id + "not found"));
    }

    public User findByEmail(String email) {
        return userDAO.findByEmail(email).orElseThrow(() -> new NotFoundException("User with email: " + email + "not found"));
    }
}
