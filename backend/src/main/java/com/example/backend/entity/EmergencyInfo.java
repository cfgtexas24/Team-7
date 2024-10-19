package com.example.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Entity;

@Entity
@Table(name = "emergencyInfo")
public class EmergencyInfo {

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
    @Column(name = "address")
    private String address;
    @Column(name = "city")
    private String city;
    @Column(name = "state")
    private String state;
    @Column(name = "zipCode")
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
    @Column(name = "emergencyType")
    private String emergencyType;

    public EmergencyInfo(String address, int age, String city, String email, String emergencyType, String firstName, String gender, boolean isAdmin, boolean isMentee, boolean isMentor, String lastName, String phoneNumber, String state, int zipCode) {
        this.address = address;
        this.age = age;
        this.city = city;
        this.email = email;
        this.emergencyType = emergencyType;
        this.firstName = firstName;
        this.gender = gender;
        this.isAdmin = isAdmin;
        this.isMentee = isMentee;
        this.isMentor = isMentor;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;
    }

    public EmergencyInfo() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getZipCode() {
        return zipCode;
    }

    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
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

    public String getEmergencyType() {
        return emergencyType;
    }

    public void setEmergencyType(String emergencyType) {
        this.emergencyType = emergencyType;
    }

}
