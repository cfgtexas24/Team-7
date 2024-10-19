package com.example.backend.controllers;

import com.example.backend.entity.Resources;
import com.example.backend.services.ResourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
    @PostMapping
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
