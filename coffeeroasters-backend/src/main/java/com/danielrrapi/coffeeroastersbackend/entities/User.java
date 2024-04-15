package com.danielrrapi.coffeeroastersbackend.entities;

import com.danielrrapi.coffeeroastersbackend.enums.RoleType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String firstname;

    private String lastname;

    private LocalDate dob;

    private String email;

    private String password;

    @Enumerated(EnumType.STRING)
    private RoleType role;

}
