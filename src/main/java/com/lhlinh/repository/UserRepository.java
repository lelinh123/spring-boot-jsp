package com.lhlinh.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lhlinh.model.Person;
@Repository
public interface UserRepository extends JpaRepository<Person, Integer>{

}
