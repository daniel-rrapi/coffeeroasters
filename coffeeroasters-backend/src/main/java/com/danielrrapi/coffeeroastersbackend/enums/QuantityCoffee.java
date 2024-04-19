package com.danielrrapi.coffeeroastersbackend.enums;

public enum QuantityCoffee {
   GRAMS_250("250g"),
    GRAMS_500("500g"),
    KILOGRAMS_1("1kg");

   private final String value;

   private QuantityCoffee(String value) {
       this.value = value;
   }

   public String getValue() {
       return value;
   }
}
