package com.example.backend.services;

import org.springframework.stereotype.Service;

import com.example.backend.repository.UserRepository;

@Service
public class UserService {
    
    private final UserRepository userRespsitory;

    public PersonService(UserRepository personRepository){
        this.personRepository = personRepository;
    }

    public Person addPerson(Person person) {
        return personRepository.save(person);
    }
}
