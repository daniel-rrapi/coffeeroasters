package com.danielrrapi.coffeeroastersbackend.repositories;

import com.danielrrapi.coffeeroastersbackend.entities.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface AddressDAO extends JpaRepository<Address, UUID> {
}
