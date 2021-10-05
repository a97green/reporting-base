package ru.aGreen.reportingbase.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Passport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String lastName;
    private String firstName;
    private String patronymic; // отчество
    private String serialPassport;
    private String numberPassport;
    private String issued; // выдан
    private String issuedDate;

    public Passport() {
    }

    public Passport(String lastName, String firstName, String patronymic, String serialPassport, String numberPassport, String issued, String issuedDate) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.patronymic = patronymic;
        this.serialPassport = serialPassport;
        this.numberPassport = numberPassport;
        this.issued = issued;
        this.issuedDate = issuedDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getPatronymic() {
        return patronymic;
    }

    public void setPatronymic(String patronymic) {
        this.patronymic = patronymic;
    }

    public String getSerialPassport() {
        return serialPassport;
    }

    public void setSerialPassport(String serialPassport) {
        this.serialPassport = serialPassport;
    }

    public String getNumberPassport() {
        return numberPassport;
    }

    public void setNumberPassport(String numberPassport) {
        this.numberPassport = numberPassport;
    }

    public String getIssued() {
        return issued;
    }

    public void setIssued(String issued) {
        this.issued = issued;
    }

    public String getIssuedDate() {
        return issuedDate;
    }

    public void setIssuedDate(String issuedDate) {
        this.issuedDate = issuedDate;
    }
}
