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
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users") 
public class User {

    public enum EmergencyType {
        HOMELESS, SLEEPING_IN_CAR, NO_PARENT
    }
 
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
    private String phoneNumber;
    @Column(name = "gender")
    private String gender;
    @Column(name = "isMentor")
    private boolean isMentor;
    @Column(name = "isMentee")
    private boolean isMentee;
    @Column(name = "isAdmin")
    private boolean isAdmin;
    @Enumerated(EnumType.STRING)
    @Column(name = "emergencyType")
    private EmergencyType emergencyType;


    public User(){
    }

    public User(int id, String firstName, String lastName, String email, int age, String address, String city, String state, int zipCode, String phoneNumber, String gender, boolean isMentor, boolean isMentee, boolean isAdmin,  EmergencyType emergencyType){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.isMentor = isMentor;
        this.isMentee = isMentee;
        this.isAdmin = isAdmin;
        this.emergencyType = emergencyType;
    }

    public User(String firstName, String lastName, String email, int age, String address, String city, String state, int zipCode, String phoneNumber, String gender, boolean isMentor, boolean isMentee, boolean isAdmin,  EmergencyType emergencyType){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.isMentor = isMentor;
        this.isMentee = isMentee;
        this.isAdmin = isAdmin;
        this.emergencyType = emergencyType;
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
    
    public void setLastName(String lastName){
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

    public String getAddress(){
        return address;
    }

    public void setAddress(String address){
        this.address = address;
    }

    public String getCity(){
        return city;
    }

    public void setCity(String city){
        this.city = city;
    }

    public String getState(){
        return state;
    }

    public void setState(String state){
        this.state = state;
    }

    public int getZipCode(){
        return zipCode;
    }

    public void setZipCode(int zipCode){
        this.zipCode = zipCode;
    }

    public String getPhoneNumber(){
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber){
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

    public EmergencyType getEmergencyType() {
        return emergencyType;
    }

    public void setEmergencyType(EmergencyType emergencyType) {
        this.emergencyType = emergencyType;
    }
    
}
