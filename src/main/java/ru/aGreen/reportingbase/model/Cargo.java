package ru.aGreen.reportingbase.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cargo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String weight;
    private String loadingDate;
    private String loadingPlace;
    private String loadingPerson;
    private String loadingNumber;
    private String unloadingDate;
    private String unloadingPlace;
    private String unloadingPerson;
    private String unloadingNumber;
    private String comment;

    public Cargo() {
    }

    public Cargo(String name, String weight, String loadingDate, String unloadingDate, String loadingPlace, String unloadingPlace) {
        this.name = name;
        this.weight = weight;
        this.loadingDate = loadingDate;
        this.unloadingDate = unloadingDate;
        this.loadingPlace = loadingPlace;
        this.unloadingPlace = unloadingPlace;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getLoadingDate() {
        return loadingDate;
    }

    public void setLoadingDate(String loadingDate) {
        this.loadingDate = loadingDate;
    }

    public String getUnloadingDate() {
        return unloadingDate;
    }

    public void setUnloadingDate(String unloadingDate) {
        this.unloadingDate = unloadingDate;
    }

    public String getLoadingPlace() {
        return loadingPlace;
    }

    public void setLoadingPlace(String loadingPlace) {
        this.loadingPlace = loadingPlace;
    }

    public String getUnloadingPlace() {
        return unloadingPlace;
    }

    public void setUnloadingPlace(String unloadingPlace) {
        this.unloadingPlace = unloadingPlace;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getLoadingPerson() {
        return loadingPerson;
    }

    public void setLoadingPerson(String loadingPerson) {
        this.loadingPerson = loadingPerson;
    }

    public String getLoadingNumber() {
        return loadingNumber;
    }

    public void setLoadingNumber(String loadingNumber) {
        this.loadingNumber = loadingNumber;
    }

    public String getUnloadingPerson() {
        return unloadingPerson;
    }

    public void setUnloadingPerson(String unloadingPerson) {
        this.unloadingPerson = unloadingPerson;
    }

    public String getUnloadingNumber() {
        return unloadingNumber;
    }

    public void setUnloadingNumber(String unloadingNumber) {
        this.unloadingNumber = unloadingNumber;
    }
}
