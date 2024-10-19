package com.example.backend.services;

import com.example.backend.entity.Events;
import com.example.backend.repository.EventsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventsService {

    @Autowired
    private EventsRepository eventsRepository;

    public List<Events> getAllEvents() {
        return eventsRepository.findAll();
    }

    public Optional<Events> getEventById(int id) {
        return eventsRepository.findById(id);
    }

    public Events createEvent(Events event) {
        return eventsRepository.save(event);
    }

    public Events updateEvent(int id, Events eventDetails) {
        Optional<Events> event = eventsRepository.findById(id);
        if (event.isPresent()) {
            Events updatedEvent = event.get();
            updatedEvent.setTitle(eventDetails.getTitle());
            updatedEvent.setLocation(eventDetails.getLocation());
            updatedEvent.setDate(eventDetails.getDate());
            updatedEvent.setDesription(eventDetails.getDesription());
            updatedEvent.setStartTime(eventDetails.getStartTime());
            updatedEvent.setEndTime(eventDetails.getEndTime());
            return eventsRepository.save(updatedEvent);
        } else {
            return null; // Handle event not found
        }
    }

    public void deleteEvent(int id) {
        eventsRepository.deleteById(id);
    }
}
