/*
 * User.java
 * 
 * This file defines the table for the 
 * User entity. It correlates to the 
 * PostgreSQL database
 */
package com.example.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue 
    private int id;
    @Column(name = "firstName")
    private String firstName;
    @Column(name = "lastName")
    private String lastName;
    @Column(name = "email")
    private String email;
    @Column(name = "age")
    private int age;
    @Column(name="address")
    private String address;
    @Column(name="city")
    private String city;
    @Column(name="state")
    private String state;
    @Column(name="zipCode")
    private int zipCode;
    @Column(name = "phoneNumber")
    private int phoneNumber;
    @Column(name = "gender")
    private String gender;
    @Column(name = "isMentor")
    private boolean isMentor;
    @Column(name = "isMentee")
    private boolean isMentee;
    @Column(name = "isAdmin")
    private boolean isAdmin;

    public User(){
    }

    public User(int id, String email, String firstName, String lastName, String gender, String location, String name, int phoneNumber, boolean isMentor, boolean isMentee, boolean isAdmin){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.isMentor = isMentor;
        this.isMentee = isMentee;
        this.isAdmin = isAdmin;
    }

    public User(String email, String firstName, String lastName, String gender, String location, String name, int phoneNumber, boolean isMentor, boolean isMentee, boolean isAdmin){
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.isMentor = isMentor;
        this.isMentee = isMentee;
        this.isAdmin = isAdmin;
    }


    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getFirstName(){
        return this.firstName;
    }

    public String setFirstName(String firstName){
        return this.firstName = firstName;
    }

    public String getLastName(){
        return this.lastName;
    }
    
    public String setLastName(String lastName){
        this.lastName = lastName;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public int getAge(){
        return age;
    }

    public void setAge(int age){
        this.age = age;
    }

    public int getAddress(){
        return this.;
    }

    public void setAddress(int age){
        this.age = age;
    }

    public String getLocation(){
        return location;
    }

    public void setLocation(String location){
        this.location = location;
    }

    public int getPhoneNumber(){
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber){
        this.phoneNumber = phoneNumber;
    }

    public String getGender(){
        return gender;
    }

    public void setGender(String gender){
        this.gender = gender;
    }

    public boolean isIsMentor() {
        return isMentor;
    }

    public void setIsMentor(boolean isMentor) {
        this.isMentor = isMentor;
    }

    public boolean isIsMentee() {
        return isMentee;
    }

    public void setIsMentee(boolean isMentee) {
        this.isMentee = isMentee;
    }

    public boolean isIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(boolean isAdmin) {
        this.isAdmin = isAdmin;
    }
     
    
}
