package com.danielrrapi.coffeeroastersbackend.services;

import com.danielrrapi.coffeeroastersbackend.entities.User;
import com.danielrrapi.coffeeroastersbackend.exceptions.BadRequestException;
import com.danielrrapi.coffeeroastersbackend.exceptions.UnauthorizedException;
import com.danielrrapi.coffeeroastersbackend.payloads.NewUserDTO;
import com.danielrrapi.coffeeroastersbackend.payloads.UserLoginDTO;
import com.danielrrapi.coffeeroastersbackend.repositories.UserDAO;
import com.danielrrapi.coffeeroastersbackend.security.JWTTools;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserService userService;

    @Autowired
    private UserDAO userDAO;

    @Autowired
    private PasswordEncoder bCrypt;

    @Autowired
    private JWTTools jwtTools;

    public String authenticateUserAndGenerateToken(UserLoginDTO payload) {
        User user = userService.findByEmail(payload.email());

        if(bCrypt.matches(payload.password(), user.getPassword())) {
            return jwtTools.createToken(user);
        } else {
            throw new UnauthorizedException("Something wrong! Check email/password");
        }
    }

    public User saveUser(NewUserDTO payload) {
        userDAO.findByEmail(payload.email()).ifPresent(user -> {
            throw new BadRequestException("Email " + user.getEmail() + " is already used");
        });
        User newUser = new User(payload.firstname(), payload.lastname(), payload.dob(), payload.email(), bCrypt.encode(payload.password()));
        return userDAO.save(newUser);
    }
}
