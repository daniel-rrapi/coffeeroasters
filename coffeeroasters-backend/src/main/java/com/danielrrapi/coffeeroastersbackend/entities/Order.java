package com.danielrrapi.coffeeroastersbackend.entities;

import com.danielrrapi.coffeeroastersbackend.enums.*;
import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "orders")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Setter(AccessLevel.NONE)
    private UUID id;

    @Column(name = "preferences_coffee")
    @Enumerated(EnumType.STRING)
    private PreferencesCoffee preferencesCoffee;

    @Column(name = "coffee_type")
    @Enumerated(EnumType.STRING)
    private CoffeeType coffeeType;

    @Column(name = "quantity")
    @Enumerated(EnumType.STRING)
    private QuantityCoffee quantityCoffee;

    @Column(name = "grind_type")
    @Enumerated(EnumType.STRING)
    private GrindTypeCoffee grindTypeCoffee;

    @Column(name = "shipping_frequency")
    @Enumerated(EnumType.STRING)
    private ShippingFrequencyCoffee shippingFrequencyCoffee;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "address_id")
    private Address address;
}
