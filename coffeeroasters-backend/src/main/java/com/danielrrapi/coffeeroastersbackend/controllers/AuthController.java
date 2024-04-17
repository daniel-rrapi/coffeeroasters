package com.danielrrapi.coffeeroastersbackend.controllers;

import com.danielrrapi.coffeeroastersbackend.entities.User;
import com.danielrrapi.coffeeroastersbackend.payloads.NewUserDTO;
import com.danielrrapi.coffeeroastersbackend.payloads.UserLoginDTO;
import com.danielrrapi.coffeeroastersbackend.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public String login(@RequestBody UserLoginDTO payload) { return authService.authenticateUserAndGenerateToken(payload);}

    @PostMapping("/register")
    public User register(@RequestBody NewUserDTO payload) { return authService.saveUser(payload);}
}
