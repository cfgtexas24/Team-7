/**
 * This file sets the api routes for 
 * POST, PUT, CREATE, DELETE
 * of an Event entity
 */

package com.example.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.Events;
import com.example.backend.services.EventsService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/events/")
public class EventsController {

    @Autowired
    private EventsService eventsService;

    // Get all events
    @GetMapping
    public List<Events> getAllEvents() {
        return eventsService.getAllEvents();
    }

    // Get event by ID
    @GetMapping("/{id}")
    public ResponseEntity<Events> getEventById(@PathVariable int id) {
        Optional<Events> event = eventsService.getEventById(id);
        return event.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create new event
    @PostMapping
    public Events createEvent(@RequestBody Events event) {
        return eventsService.createEvent(event);
    }

    // Update an event by ID
    @PutMapping("/{id}")
    public ResponseEntity<Events> updateEvent(@PathVariable int id, @RequestBody Events eventDetails) {
        Events updatedEvent = eventsService.updateEvent(id, eventDetails);
        if (updatedEvent != null) {
            return ResponseEntity.ok(updatedEvent);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete an event by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable int id) {
        eventsService.deleteEvent(id);
        return ResponseEntity.noContent().build();
    }
}
