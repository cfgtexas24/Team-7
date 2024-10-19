package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.entity.Events;

public interface EventsRepository extends JpaRepository<Events, Integer> {
}
