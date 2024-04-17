package com.danielrrapi.coffeeroastersbackend.payloads;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDate;

public record NewUserDTO(@NotBlank(message = "Firstname is required") String firstname,
                         @NotBlank(message = "Lastname is required") String lastname,
                         @NotBlank(message = "Date of birth is required") @JsonFormat(pattern = "yyyy/MM/dd") LocalDate dob,
                         @NotBlank(message = "Email is required") String email,
                         @NotBlank(message = "Password is required") String password
                         ) {

}
