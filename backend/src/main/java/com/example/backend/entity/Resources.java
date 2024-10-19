/*
 * Resouces.java
 * 
 * This file defines the table for the 
 * Resources entity. It correlates to the 
 * PostgreSQL database
 */
package com.example.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "resources")
public class Resources {

    @Id
    @GeneratedValue
    private int id;

    @Column(name = "category")
    private String category;
    
    @Column(name = "link")
    private String link;

    @Column(name = "body")
    private String body;

    public Resources() {
    }

    public Resources(int id, String category, String link, String body) {
        this.id = id;
        this.body = body;
        this.category = category;
        this.link = link;
    }

    public Resources(String category, String link, String body) {
        this.body = body;
        this.category = category;
        this.link = link;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }
}
