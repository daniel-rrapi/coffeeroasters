package com.danielrrapi.coffeeroastersbackend.controllers;

import com.danielrrapi.coffeeroastersbackend.entities.Address;
import com.danielrrapi.coffeeroastersbackend.services.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/addresses")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @GetMapping
    public Page<Address> getAllAddresses(@RequestParam(defaultValue = "0") int pageNumber,
                                         @RequestParam(defaultValue = "10") int size,
                                         @RequestParam(defaultValue = "date") String orderBy) {
        return addressService.findAll(pageNumber, size, orderBy);
    }

    @GetMapping("/{id}")
    public Address getAddressById(@PathVariable String id) {
    return addressService.findById(id);
    }

    @PostMapping
    public Address saveAddress(@RequestBody Address address) {
        return addressService.save(address);
    }

    @DeleteMapping("/{id}")
    public Address deleteById(@PathVariable String id) {
        return addressService.findByIdAndDelete(id);
    }
}
