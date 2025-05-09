/**
 * This file sets the api routes for 
 * POST, PUT, CREATE, DELETE
 * of Resource entity
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

import com.example.backend.entity.Resources;
import com.example.backend.services.ResourcesService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/resources/")
public class ResourcesController {

    @Autowired
    private ResourcesService resourcesService;

    // Get all resources
    @GetMapping
    public List<Resources> getAllResources() {
        return resourcesService.getAllResources();
    }

    // Get a resource by ID
    @GetMapping("/{id}")
    public ResponseEntity<Resources> getResourceById(@PathVariable int id) {
        Optional<Resources> resource = resourcesService.getResourceById(id);
        return resource.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Get resources by category
    // @GetMapping("/category/{category}")
    // public List<Resources> getResourcesByCategory(@PathVariable String category) {
    //     return resourcesService.getResourcesByCategory(category);
    // }

    // Create a new resource
    @PostMapping("/")
    public Resources createResource(@RequestBody Resources resource) {
        return resourcesService.createResource(resource);
    }

    // Update a resource by ID
    @PutMapping("/{id}")
    public ResponseEntity<Resources> updateResource(@PathVariable int id, @RequestBody Resources resourceDetails) {
        Resources updatedResource = resourcesService.updateResource(id, resourceDetails);
        if (updatedResource != null) {
            return ResponseEntity.ok(updatedResource);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a resource by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteResource(@PathVariable int id) {
        resourcesService.deleteResource(id);
        return ResponseEntity.noContent().build();
    }
}
