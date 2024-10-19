package com.example.backend.controllers;

import com.example.backend.entity.Events;
import com.example.backend.services.EventsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
