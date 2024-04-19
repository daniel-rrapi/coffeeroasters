package com.danielrrapi.coffeeroastersbackend.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "addresses")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Setter(AccessLevel.NONE)
    private UUID id;

    @Column(name = "full_name", nullable = false)
    private String fullName;
    
    @Column(name = "address_line1", nullable = false)
    private String addresLine1;

    @Column(name = "address_line2", nullable = false)
    private String addressLine2;

    @Column(nullable = false)
    private String city;

    @Column(name = "postal_code", nullable = false)
    private String postalCode;

    @Column(name = "state_province", nullable = false)
    private String stateProvince;

    @Column(nullable = false)
    private String country;

    @Column(name = "phone_number")
    private String phoneNumber;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
