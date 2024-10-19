/*
 * EmergencyService.java
 * 
 * This file handles the CRUD commands
 * for the EmergencyInfo entity
 */
package com.example.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.backend.entity.EmergencyInfo;
import com.example.backend.repository.EmergencyInfoRepository;

@Service
public class EmergencyInfoService {

    private final EmergencyInfoRepository EmergencyInfoRepository;

    public EmergencyInfoService(EmergencyInfoRepository EmergencyInfoRepository) {
        this.EmergencyInfoRepository = EmergencyInfoRepository;
    }

    public EmergencyInfo createEmergencyInfo(EmergencyInfo EmergencyInfo) {
        return EmergencyInfoRepository.save(EmergencyInfo);
    }

    public List<EmergencyInfo> getAllEmergencyInfos() {
        return EmergencyInfoRepository.findAll();
    }

    public Optional<EmergencyInfo> getEmergencyInfoById(int id) {
        return EmergencyInfoRepository.findById(id);
    }

    public void deleteEmergencyInfo(int id) {
        EmergencyInfoRepository.deleteById(id);
    }

}
