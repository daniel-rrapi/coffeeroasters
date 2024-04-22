package com.danielrrapi.coffeeroastersbackend.controllers;

import com.danielrrapi.coffeeroastersbackend.enums.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/coffee")
public class CoffeeController {

    @GetMapping("/preferencies")
    public PreferencesCoffee[] getCoffeePreferencies() {
        return PreferencesCoffee.values();
    }

    @GetMapping("/types")
    public CoffeeType[] getCoffeeTypes() {
        return CoffeeType.values();
    }

    @GetMapping("/quantities")
    public String[] getCoffeeQuantities() {
        QuantityCoffee[] quantities = QuantityCoffee.values();
        String[] formattedQuantities = new String[quantities.length];
        for (int i = 0; i < quantities.length; i++) {
            formattedQuantities[i] = quantities[i].getValue();
        }
        return formattedQuantities;
    }

    @GetMapping("/grind")
    public GrindTypeCoffee[] getGrindTypes() {
        return GrindTypeCoffee.values();
    }

    @GetMapping("/shipping-frequency")
    public ShippingFrequencyCoffee[] getShippingFrequency() {
        return ShippingFrequencyCoffee.values();
    }

}
