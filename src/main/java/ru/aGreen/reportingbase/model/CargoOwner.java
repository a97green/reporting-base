package ru.aGreen.reportingbase.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CargoOwner {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String legalAddress; //юр.
    private String postalAddress; // почт
    private String actualAddress; // факт
    private String numberPhone;
    private String contactPerson;
    private String numberPerson;
    private String inn;
    private String kpp;
    private String ogrn;

    public CargoOwner() {
    }

    public CargoOwner(String name, String legalAddress, String postalAddress, String actualAddress, String numberPhone, String contactPerson, String numberPerson, String inn, String kpp, String ogrn) {
        this.name = name;
        this.legalAddress = legalAddress;
        this.postalAddress = postalAddress;
        this.actualAddress = actualAddress;
        this.numberPhone = numberPhone;
        this.contactPerson = contactPerson;
        this.numberPerson = numberPerson;
        this.inn = inn;
        this.kpp = kpp;
        this.ogrn = ogrn;
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

    public String getLegalAddress() {
        return legalAddress;
    }

    public void setLegalAddress(String legalAddress) {
        this.legalAddress = legalAddress;
    }

    public String getPostalAddress() {
        return postalAddress;
    }

    public void setPostalAddress(String postalAddress) {
        this.postalAddress = postalAddress;
    }

    public String getActualAddress() {
        return actualAddress;
    }

    public void setActualAddress(String actualAddress) {
        this.actualAddress = actualAddress;
    }

    public String getNumberPhone() {
        return numberPhone;
    }

    public void setNumberPhone(String numberPhone) {
        this.numberPhone = numberPhone;
    }

    public String getContactPerson() {
        return contactPerson;
    }

    public void setContactPerson(String contactPerson) {
        this.contactPerson = contactPerson;
    }

    public String getNumberPerson() {
        return numberPerson;
    }

    public void setNumberPerson(String numberPerson) {
        this.numberPerson = numberPerson;
    }

    public String getInn() {
        return inn;
    }

    public void setInn(String inn) {
        this.inn = inn;
    }

    public String getKpp() {
        return kpp;
    }

    public void setKpp(String kpp) {
        this.kpp = kpp;
    }

    public String getOgrn() {
        return ogrn;
    }

    public void setOgrn(String ogrn) {
        this.ogrn = ogrn;
    }
}
