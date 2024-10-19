/*
 * Events.java
 * 
 * This file defines the table for the 
 * Events entity. It correlates to the 
 * PostgreSQL database
 */
package com.example.backend.entity;

import java.time.LocalTime;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "events")
public class Events {

    @Id
    @GeneratedValue
    private int id;

    @Column(name = "title")
    private String title;

    @Column(name = "location")
    private String location;

    @Column(name = "date")
    private Date date;

    @Column(name = "description")
    private String desription;

    @Column(name = "startTime")
    private LocalTime startTime;

    @Column(name = "endTime")
    private LocalTime endTime;

    public Events(int id, String title, String location, Date date, String desription, LocalTime startTime, LocalTime endTime) {
        this.id = id;
        this.title = title;
        this.location = location;
        this.date = date;
        this.desription = desription;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public Events(String title, String location, Date date, String desription, LocalTime startTime, LocalTime endTime) {
        this.title = title;
        this.location = location;
        this.date = date;
        this.desription = desription;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public Events(){
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDesription() {
        return desription;
    }

    public void setDesription(String desription) {
        this.desription = desription;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

}
