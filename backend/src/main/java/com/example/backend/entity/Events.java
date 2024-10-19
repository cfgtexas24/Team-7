package com.example.backend.entity;

import java.time.LocalTime;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "events")
public class Events {

    @Id
    @GeneratedValue
    private Long id;

    private String title;
    private String location;
    private Date date;
    private String desription;
    private LocalTime startTime;
    private LocalTime endTime;

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getTitle(){
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getLocation(){
        return location;
    }

    public void setLocation(String location){
        this.location = location;
    }

    public Date getDate(){
        return date;
    }

    public void setDate(Date date){
        this.date = date;
    }

    public String getDesription(){
        return desription;
    }

    public void setDesription(String desription){
        this.desription = desription;
    }

    public LocalTime getStartTime(){
        return startTime;
    }

    public void setStartTime(LocalTime startTime){
        this.startTime = startTime;
    }

    public LocalTime getEndTime(){
        return endTime;
    }

    public void setEndTime(LocalTime endTime){
        this.endTime = endTime;
    }


    


}
