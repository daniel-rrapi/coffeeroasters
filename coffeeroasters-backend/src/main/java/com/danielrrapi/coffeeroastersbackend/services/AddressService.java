package com.danielrrapi.coffeeroastersbackend.services;

import com.danielrrapi.coffeeroastersbackend.entities.Address;
import com.danielrrapi.coffeeroastersbackend.exceptions.NotFoundException;
import com.danielrrapi.coffeeroastersbackend.repositories.AddressDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class AddressService {

    @Autowired
    private AddressDAO addressDAO;

    public Page<Address> findAll(int pageNumber, int size, String orderBy) {
        if (size > 100) size = 100;
        Pageable pageable = PageRequest.of(pageNumber, size, Sort.by(orderBy));
        return addressDAO.findAll(pageable);
    }

    public Address findById(String id) {
        return addressDAO.findById(UUID.fromString(id)).orElseThrow(() -> new NotFoundException("Address with id: " + id + " not found"));
    }

    public Address save(Address newAddress) {
        return addressDAO.save(newAddress);
    }

    public Address findByIdAndDelete(String id) {
        Address found = this.findById(id);
        addressDAO.delete(found);
        return found;
    }
}
