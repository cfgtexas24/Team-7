/*
 * ResouresService.java
 * 
 * This file handles the CRUD commands
 * for the Resources entity
 */
package com.example.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.entity.Resources;
import com.example.backend.repository.ResourcesRepository;

@Service
public class ResourcesService {

    @Autowired
    private ResourcesRepository resourcesRepository;

    public List<Resources> getAllResources() {
        return resourcesRepository.findAll();
    }

    public Optional<Resources> getResourceById(int id) {
        return resourcesRepository.findById(id);
    }

    // public List<Resources> getResourcesByCategory(String category) {
    //     return resourcesRepository.findByCategory(category);
    // }

    public Resources createResource(Resources resource) {
        return resourcesRepository.save(resource);
    }

    public Resources updateResource(int id, Resources resourceDetails) {
        Optional<Resources> optionalResource = resourcesRepository.findById(id);
        if (optionalResource.isPresent()) {
            Resources existingResource = optionalResource.get();
            existingResource.setCategory(resourceDetails.getCategory());
            existingResource.setLink(resourceDetails.getLink());
            existingResource.setBody(resourceDetails.getBody());
            return resourcesRepository.save(existingResource);
        } else {
            return null; // Handle resource not found
        }
    }

    public void deleteResource(int id) {
        resourcesRepository.deleteById(id);
    }
}
